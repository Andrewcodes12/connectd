import React, {useState} from 'react';
import { useDispatch} from 'react-redux';



import { updateReview } from '../../store/review';

function EditReviews({review}) {

    const now = new Date();

    const [reviewID, setReviewID] = useState(review.id);
    const [review_body, setReviewBody] = useState(review.review_body);
    const [review_rating, setReviewRating] = useState(review.review_rating);
    const [user_id, setReviewUserId] = useState(review.user_id);
    const [event_id, setReviewEventId] = useState(review.event_id);
    const [created_at, setReviewCreatedAt] = useState(review.created_at);
    const [updated_at, setReviewUpdatedAt] = useState(review.updated_at);
    const [isClicked, setIsClicked] = useState(false);



    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const review = {
            id: reviewID,
            review_body,
            review_rating,
            user_id,
            event_id,
            created_at,
            updated_at
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
                onChange={(e) => setReviewRating(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    ) : null}
    </>
  )
}

export default EditReviews
