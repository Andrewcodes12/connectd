import React, {useEffect, useState} from 'react';
import {NavLink, useParams,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { AddReview } from '../../store/review';


function AddReviews({event}) {
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
    const history = useHistory();

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

  return (
    <div className='add-review'>
    <div className='add-review-container'>
      <div className='add-review-header'>
        <h4>Leave A Review</h4>
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
                      <option value='0'>Select a rating</option>
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
  )
}

export default AddReviews
