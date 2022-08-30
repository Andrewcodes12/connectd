const LOAD_REVIEWS = 'LOAD_REVIEWS';
const ADD_REVIEW = 'ADD_REVIEW';
const UPDATE_REVIEW = 'UPDATE_REVIEW';
const DELETE_REVIEW = 'DELETE_REVIEW';


const load = (reviews) => ({
    type : LOAD_REVIEWS,
    reviews
});


const add = (review) => ({
    type : ADD_REVIEW,
    review
});

const update = (review) => ({
    type : UPDATE_REVIEW,
    review
});

const remove = (id) => ({
    type : DELETE_REVIEW,
    id
});


export const loadReviews = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`);
    if(response.ok) {
        const reviews = await response.json();
        dispatch(load(reviews));
    }
}

export const addReview = (event_id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${event_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event_id)
    });
    if(response.ok) {
        const review = await response.json();
        dispatch(add(review));
    }
}


export const updateReview = (event_id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${event_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event_id)
    });
    if(response.ok) {
        const review = await response.json();
        dispatch(update(review));
    }
}


export const deleteReview = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    });
    if(response.ok) {
        dispatch(remove(id));
    }
}


export const sortByRating = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}/sort/rating`);
    if(response.ok) {
        const reviews = await response.json();
        dispatch(load(reviews));
    }
}

export const sortByDate = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}/sort/date`);
    if(response.ok) {
        const reviews = await response.json();
        dispatch(load(reviews));
    }
}

const initialState = {
    reviews: {}
}

const reviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_REVIEWS:
            return {
                ...state,
                reviews: action.reviews
            }
        case ADD_REVIEW:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    [action.review.id]: action.review
                }
            }
        case UPDATE_REVIEW:
            return {
                ...state,
                reviews: {
                    ...state.reviews,
                    [action.review.id]: action.review
                }
            }
        case DELETE_REVIEW:
            const newReviews = {...state.reviews};
            delete newReviews[action.id];
            return {
                ...state,
                reviews: newReviews
            }
        default:
            return state;
    }
}


export default reviewReducer;
