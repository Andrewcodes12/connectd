import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './addReviews.css'

import { AddReview } from '../../store/review';


function AddReviews({event}) {
    const reviews = useSelector(state => state.reviews);
    let now = new Date().toISOString().slice(0, 10);

    const [created_at, setCreatedAt] = useState(now)
    const [updated_at, setUpdatedAt] = useState(now)
    const [review_body, setReviewBody] = useState('')
    const [review_rating, setRating] = useState(0)
    const [user_id, setUserId] = useState(event.user_id)
    const [event_id, setEventId] = useState(event.id)
    const [isClicked, setIsClicked] = useState(false)
    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();


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
                user_id:1,
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


  return (
    <div className='add-review'>
    <div className="event-reviews-review" ><i className="fa-solid fa-star review-star" ></i> <span className="single-event-average-rating">{getAverageRating()}</span> <i className="fa-solid fa-circle"></i> <span className="review-length-review"> {reviews.length} review(s)</span></div>
    <div className='add-review-container'>

      <div className='add-review-form'>
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
  )
}

export default AddReviews
