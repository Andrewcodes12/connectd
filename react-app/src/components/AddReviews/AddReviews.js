import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';


import {addReview} from '../../store/review'


function AddReviews({event}) {
    let now = new Date();

    const dispatch = useDispatch()
    const {eventsId} = useParams();

    const [review_body, setReviewBody] = useState('');
    const [review_rating, setReviewRating] = useState('');
    const [user_id, setReviewUserId] = useState('');
    const [event_id, setReviewEventId] = useState(event.id);
    const [created_at, setReviewCreatedAt] = useState('');
    const [updated_at, setReviewUpdatedAt] = useState('');
    const [erros, setErrors] = useState([]);

    const resetFields = () => {
        setReviewBody('')
        setReviewRating('')
        setReviewUserId('')
        setReviewEventId('')
        setReviewCreatedAt('')
        setReviewUpdatedAt('')
    }

    const validateReview = () => {
        const errors = []

        if (!review_body) errors.push('Please provide a review')
        if (!review_rating) errors.push('Please provide a rating')
        if (!user_id) errors.push('Please provide a user id')
        if (!event_id) errors.push('Please provide an event id')
        if (!created_at) errors.push('Please provide a created at date')
        if (!updated_at) errors.push('Please provide an updated at date')

        setErrors(errors)
        return errors
    }

    const handleSubmit =  (e) => {
        e.preventDefault()

        const errors = validateReview()

        if(!errors.length){
        const review = {
            review_body,
            review_rating,
            user_id:1,
            event_id,
            created_at: now,
            updated_at: now
            }
            dispatch(addReview(review))
            resetFields()
        } else {
            setErrors(['failed to create review'])
        }
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Review</label>
                <input
                    type='text'
                    value={review_body}
                    onChange={(e) => setReviewBody(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Rating</label>
                <input
                    type='number'
                    value={review_rating}
                    onChange={(e) => setReviewRating(e.target.value)}
                    defaultValue={0}
                    required
                />
            </div>


            <button type='submit' onSubmit={() => console.log('submitted')}>Submit</button>
        </form>
    </>
  )
}

export default AddReviews
