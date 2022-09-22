import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink,useParams,useHistory } from 'react-router-dom';

import './addReviews.css'

import { AddReview, loadReviewsByEvent } from '../../store/review';
import { deleteReviewById, sortReviewsByRating, sortReviewsByRatingAsc,sortReviewsByDate  } from '../../store/review';

function AddReviews({event, users}) {
    const reviews = useSelector(state => state.reviews);
    const sessionUser = useSelector(state => state.session);

    let now = new Date().toISOString().slice(0, 10);

    const history = useHistory();

    const [created_at, setCreatedAt] = useState(now)
    const [updated_at, setUpdatedAt] = useState(now)
    const [review_body, setReviewBody] = useState('')
    const [review_rating, setRating] = useState(0)
    const [user_id, setUserId] = useState(event.user_id)
    const [event_id, setEventId] = useState(event.id)
    const [isClicked, setIsClicked] = useState(false)
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();
    const {eventsId} = useParams();

    useEffect(() => {
        loadReviewsByEvent(eventsId)
    }, [dispatch, eventsId])


    const resetFields = () => {
        setCreatedAt(now)
        setUpdatedAt(now)
        setReviewBody('')
        setRating(0)
        setUserId(event.user_id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const errors = []

        if (!review_body) errors.push('Please provide a review')
        if (!review_rating) errors.push('Please provide a rating')

        setErrors(errors)

        if(!errors.length){
            const review = {
                created_at: now,
                updated_at: now,
                review_body,
                review_rating,
                user_id: sessionUser.id,
                event_id: event.id
            }
            dispatch(AddReview(review))
            resetFields()
            setIsClicked(false)
        }
    }

    const getAverageRating = () => {
        let total = 0;
        let average = 0;
        if(reviews.length > 0){
          reviews.forEach(review => {
            total += review.review_rating;
          })
          average = total / reviews.length;
        }
        return average.toFixed(2);
      }

      const deleteReview = (id) => {
        dispatch(deleteReviewById(id));
      }

      const sortByHigestRating = async (e) => {
        e.preventDefault();
        dispatch(sortReviewsByRating(eventsId));
        setIsClicked(true);
    }

    const sortByLowestRating = async (e) => {
        e.preventDefault();
        dispatch(sortReviewsByRatingAsc(eventsId));
        setIsClicked(true);
    }

    const sortByDate = async (e) => {
        e.preventDefault();
        dispatch(sortReviewsByDate(eventsId));
        setIsClicked(true);
    }

    const removeSort = async (e) => {
        e.preventDefault();
        dispatch(loadReviewsByEvent(eventsId));
        setIsClicked(false);
    }

    function goToUserPage(userId){
        history.push(`/users/${userId}`)
    }


  return (
    <>
    <div className='add-review'>
    <div className="event-reviews-review" ><i className="fa-solid fa-star review-star" ></i> <span className="single-event-average-rating">{getAverageRating()}</span> <i className="fa-solid fa-circle"></i> <span className="review-length-review"> {reviews.length} review(s)</span></div>
    <div className='add-review-container'>

      <div className='add-review-form'>
      <div className="review-sort">
                  {isClicked ? (
                    <button onClick={removeSort}>Remove filter</button>
                  ) : (
                    <div className="single-event-filter-buttons">
                    <button onClick={sortByHigestRating}>Sort by Highest Rating</button>
                    <button onClick={sortByLowestRating}>Sort by Lowest Rating</button>
                    <button onClick={sortByDate}>Sort by Date</button>
                    </div>
                  )}
              </div>
          <form onSubmit={handleSubmit}>
              <div className='add-review-body'>
                  <textarea
                      type='text'
                      placeholder='Tell us about your experience.'
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
                      <option value='0'>Select a rating</option>
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
                <div className="text">
              {reviews && reviews.map(review => (
                review.event_id === event.id ? (
                  <div className="review-container">
                    {/* <p className="review-created">{review.created_at}</p> */}
                    <p className="review-body">{review.review_body}</p>
                    {/* <p className='review-rating'>{review.review_rating}</p> */}

                    <div className="edit-delete-container">
                      <div className='edit-reviews'>
                      {/* <EditReviews review={review} /> */}
                      </div>

                    </div>

                   {users && users.map(user => (
                      user.id === review.user_id ? (
                        <div className="user-review-container">
                            <p className="user-review-username">{user.username}</p>
                            <img src={user.user_image} alt="profile-img" className="user-review-image" onClick={() => goToUserPage(user.id)}/>
                        </div>
                      ) : null
                      ))}
                    {sessionUser && sessionUser.id === review.user_id ? (
                        <div className="delete-review-container">
                            <button onClick={() => deleteReview(review.id)} className="delete-review-btn">Delete</button>
                        </div>
                    ) : null}

                  </div>
                ) : null
              ))}
              </div>
    </>

  )
}

export default AddReviews
