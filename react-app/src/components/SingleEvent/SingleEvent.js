import React, {useEffect, useState} from 'react';
import {NavLink, useParams,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { loadEvents,deleteEventById } from '../../store/event';
import { loadUserInfo } from '../../store/user';
import { loadReviewsByEvent } from '../../store/review';

import './singleEvent.css';
import EditEvent from '../EditEvent/EditEvent';
import EditReviews from '../EditReviews/EditReviews';
import { deleteReviewById } from '../../store/review';
import AddReviews from '../AddReviews/AddReviews';


function SingleEvent() {
  const events = useSelector(state => state.events);
  const users = useSelector(state => state.users.users);
  const reviews = useSelector(state => state.reviews);

  const [copyURL, setCopyURL] = useState(`http://stay-connctd.com/events/${events.id}`);

  const dispatch = useDispatch();
  const history = useHistory();

  const {eventsId} = useParams();

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
          <AddReviews event={event} />
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
