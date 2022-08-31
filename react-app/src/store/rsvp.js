const LOAD_ALL = 'LOAD_ALL';
const LOAD_RSVP_ON_EVENT = 'LOAD_RSVP';
const CREATE = 'CREATE_RSVP';
const DELETE = 'DELETE';

export const load_all = (rsvp) => ({
    type:LOAD_ALL,
    rsvp
})

const load_on_event = (rsvp) => ({
    type:LOAD_RSVP_ON_EVENT,
    rsvp
})

const create = (rsvp) => ({
    type:CREATE,
    rsvp
})


const deleted = (id) => ({
    type:DELETE,
    id
})


export const load_all_rsvp = () => async dispatch => {
    const response = await fetch('/api/rsvps/');

    if(response.ok){
        const rsvps = await response.json();
        dispatch(load_all(rsvps));
    }
}


export const loadRsvpsOnEvent = (eventId) => async (dispatch) => {
    const response = await fetch(`/api/rsvps/${eventId}/`);

    if(response.ok){
        const rsvps = await response.json();
        dispatch(load_on_event(rsvps));
    }
}


export const createRsvp = (eventId) => async (dispatch) => {
    const response = await fetch(`/api/rsvps/${eventId}/`, {
        method: 'POST'
    });

    if(response.ok){
        const rsvp = await response.json();
        dispatch(create(rsvp));
    }
}


export const deleteRsvp = (id) => async (dispatch) => {
    const response = await fetch(`/api/rsvps/${id}/`, {
        method: 'DELETE'
    });

    if(response.ok){
        dispatch(deleted(id));
    }
}


const RsvpReducer = (state = [], action) => {
    switch(action.type){
        case LOAD_ALL:
            return {
                ...state,
                rsvps: action.rsvp
            }
        case LOAD_RSVP_ON_EVENT:
            return {
                ...state,
                rsvps: action.rsvp
            }
        case CREATE:
            return {
                ...state,
                rsvps: [...state.rsvps, action.rsvp]
            }
        case DELETE:
            return {
                ...state,
                rsvps: state.rsvps.filter(rsvp => rsvp.id !== action.id)
            }
        default:
            return state;
    }
}

export default RsvpReducer;
