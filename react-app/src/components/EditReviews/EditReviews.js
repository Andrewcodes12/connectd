import React, {useState} from 'react';
import { useDispatch} from 'react-redux';


import { updateReview } from '../../store/review';


function EditReviews({review}) {
    let now = new Date().toISOString().slice(0, 10);

    const [created_at, setCreatedAt] = useState(now)
    const [updated_at, setUpdatedAt] = useState(now)
    const [review_body, setReviewBody] = useState(review.review_body)
    const [review_rating, setRating] = useState(review.review_rating)
    const [review_id, setReviewId] = useState(review.id)
    const [user_id, setUserId] = useState(review.user_id)
    const [isClicked, setIsClicked] = useState(false)

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()

        const review = {
            created_at: now,
            updated_at: now,
            review_body,
            review_rating,
            review_id,
            user_id:1,
        }

        dispatch(updateReview(review));
        setIsClicked(false);
    }



  return (
    <>
    <button onClick={() => setIsClicked(true)}>Edit Review</button>
    {isClicked ? (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={review_body}
                onChange={(e) => setReviewBody(e.target.value)}
                required
            />
            <input
                type="number"
                value={review_rating}
                onChange={(e) => setRating(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    ) : null}


    </>
  )
}

export default EditReviews
