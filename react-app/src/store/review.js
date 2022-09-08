const LOAD = 'LOAD';
const LOAD_BY_EVENT = 'LOAD_REVIEWS_BY_EVENT';
const ADD = 'ADD_REVIEW';
const UPDATE = 'UPDATE_REVIEW';
const DELETE = 'DELETE_REVIEW';
const SORT_BY_RATING = 'SORT_BY_RATING';
const SORT_BY_DATE = 'SORT_BY_DATE';

const load = (reviews) => ({
    type: LOAD,
    reviews
});

const loadByEvent = (reviews) => ({
    type:LOAD_BY_EVENT,
    reviews
})

const add = (review) => ({
    type:ADD,
    review
})


const update = (review) => ({
    type:UPDATE,
    review
})


const deleteReview = (id) => ({
    type:DELETE,
    id
})


const sortReviewByrating = (reviews) => ({
    type:SORT_BY_RATING,
    reviews
})

const sortReviewByDate = (reviews) => ({
    type:SORT_BY_DATE,
    reviews
})


export const loadAllReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews/');

    if(response.ok){
        const reviews = await response.json();
        dispatch(load(reviews));
    }
}



export const loadReviewsByEvent = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`);

    if(response.ok){
        const reviews = await response.json();
        dispatch(loadByEvent(reviews));
    }
}

export const addReview = (review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${review.id}/`, {
        method:'POST',
        body:JSON.stringify(review)
    });

    if(response.ok){
        const newReview = await response.json();
        dispatch(add(newReview));
    }
}


export const updateReview = (review) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${review.id}/`, {
        method:'PUT',
        body:JSON.stringify(review)
    });

    if(response.ok){
        const updatedReview = await response.json();
        dispatch(update(updatedReview));
    }
}

export const deleteReviewById = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}/`, {
        method:'DELETE'
    });

    if(response.ok){
        dispatch(deleteReview(id));
    }
}


export const sortReviewsByRating = (event) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${event.id}/sort/rating/`);

    if(response.ok){
        const reviews = await response.json();
        dispatch(sortReviewByrating(reviews));
    }
}


export const sortReviewsByDate = (event) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${event.id}/sort/date/`);

    if(response.ok){
        const reviews = await response.json();
        dispatch(sortReviewByDate(reviews));
    }
}


const ReviewReducer = (state = [], action) => {
    switch(action.type){
        case LOAD:
            return {
                ...state,
                reviews: action.reviews
            }
        case LOAD_BY_EVENT:
            return {
                ...state,
                reviews: action.reviews
            }
        case ADD:
            return {
                ...state,
                reviews: [...state.reviews, action.review]
            }
        case UPDATE:
            return {
                ...state,
                reviews: state.reviews.map(review => review.id === action.review.id ? action.review : review)
            }
        case DELETE:
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.id)
            }
        case SORT_BY_RATING:
            return {
                ...state,
                reviews: action.reviews
            }
        case SORT_BY_DATE:
            return {
                ...state,
                reviews: action.reviews
            }
        default:
            return state;
    }
}


export default ReviewReducer;
