import React, {useEffect, useState} from 'react';
import {NavLink, useParams,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { loadEvents,deleteEventById } from '../../store/event';
import { loadUserInfo } from '../../store/user';
import { loadReviewsByEvent } from '../../store/review';

import './singleEvent.css';
import EditEvent from '../EditEvent/EditEvent';
import EditReviews from '../EditReviews/EditReviews';


import { AddReview } from '../../store/review';
import { deleteReviewById } from '../../store/review';

function SingleEvent() {
  const events = useSelector(state => state.events);
  const users = useSelector(state => state.users.users);
  const reviews = useSelector(state => state.reviews);

  let now = new Date();
  const {eventsId} = useParams();

  const [copyURL, setCopyURL] = useState(`http://stay-connctd.com/events/${events.id}`);
  const [created_at, setCreatedAt] = useState(null)
  const [updated_at, setUpdatedAt] = useState(null)
  const [review_body, setReviewBody] = useState('')
  const [review_rating, setRating] = useState(0)
  const [user_id, setUserId] = useState(reviews.user_id)
  const [event_id, setEventId] = useState(eventsId)
  const [isClicked, setIsClicked] = useState(false)
  const [errors, setErrors] = useState([])

  const dispatch = useDispatch();
  const history = useHistory();



  useEffect(() => {
    dispatch(loadEvents());
    dispatch(loadUserInfo());
    dispatch(loadReviewsByEvent(eventsId));
  } , []);

  const deleteEvent = (id) => {
    dispatch(deleteEventById(id));
    history.push('/');
  }

  const deleteReview = (id) => {
    dispatch(deleteReviewById(id));
  }

  //*********** ADD REVIEW FUNCTIONS ********** */
  const resetFields = () => {
    setCreatedAt(now)
    setUpdatedAt(now)
    setReviewBody('')
    setRating(0)
    setUserId(reviews.user_id)
}

const handleSubmit = (e) => {
    e.preventDefault()

    const errors = []

    if (!review_body) errors.push('Please provide a review')
    if (!review_rating) errors.push('Please provide a rating')

    setErrors(errors)

    if(!errors.length){
        const review = {
            created_at: '2023-12-12',
            updated_at: '2023-12-12',
            review_body,
            review_rating,
            user_id:1,
            event_id: parseInt(eventsId)
        }
        dispatch(AddReview(review))
        resetFields()
        setIsClicked(false)
    }
}


  return (
    <>
    {events && events.map(event => (
      event.id === parseInt(eventsId) ? (
        <>
        <h1>{event.title}</h1>
        <img src={event.event_imgs} alt="event-img" />
        <p>{event.event_description}</p>
        <p>{event.event_date}</p>
        <p>{event.event_city}, {event.event_state} {event.event_zipcode}</p>
        <p>{event.category}</p>

        <div className="share-event">
          <span strong>Share this event with friends!</span>
          <button className="share-event" onClick={() => {navigator.clipboard.writeText(`http://stay-connctd.com/events/${event.id}`)}}><i className="fas fa-share-alt"></i></button>
        </div>



        <div className="edit-delete-container">
          <div className="edit-event">
            <EditEvent event={event} />
          </div>
          <div className="delete-event">
            <button onClick={() => deleteEvent(event.id)}><i className="fas fa-trash-alt"> </i></button>
          </div>
        </div>


        <NavLink to={`/users/${event.user_id}`} className="event-link">
          {users && users.map(user => (
            user.id === event.user_id ? (
              <div className="user-event-container">
              <h4>{user.username}</h4>
              <img src={user.user_image} alt="profile-img" />
              </div>
            ) : null
          ))}
        </NavLink>

        <div className='add-review'>
          <h4>Leave A Review</h4>
          <div className='add-review-container'>
            <div className='add-review-header'>
                <h2>Write a Review</h2>
            </div>
            <div className='add-review-form'>
                <form onSubmit={handleSubmit}>
                    <div className='add-review-body'>
                        <textarea
                            type='text'
                            placeholder='Write a review'
                            value={review_body}
                            onChange={(e) => setReviewBody(e.target.value)}
                        />
                    </div>
                    <div className='add-review-rating'>
                        <label>Rating</label>
                        <select
                            value={review_rating}
                            onChange={(e) => setRating(e.target.value)}
                        >
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                    <div className='add-review-submit'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>

        </div>

        <h4>Reviews</h4>
          {reviews && reviews.map(review => (
            review.event_id === event.id ? (
              <div className="review-container">
                <p>{review.review_body}</p>
                <p>{review.created_at}</p>
                <p>{review.review_rating}</p>

                <div className="edit-delete-container">
                  <div className='edit-reviews'>
                  <EditReviews review={review} />
                  </div>
                  <div className="delete-review">
                    <button onClick={() => deleteReview(review.id)}><i className="fas fa-trash-alt"> </i></button>
                  </div>
                </div>

                {users && users.map(user => (
                  user.id === review.user_id ? (
                    <>
                      <p>{user.username}</p>
                      <img src={user.user_image} alt="profile-img" />
                    </>
                  ) : null
                  ))}
              </div>
            ) : null
          ))}
      </>
      ) :
      <>
      </>
  ))}

    </>
  )
}

export default SingleEvent
