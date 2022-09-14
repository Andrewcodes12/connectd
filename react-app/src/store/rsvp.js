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
    const response = await fetch(`/api/rsvps/${eventId}`);

    if(response.ok){
        const rsvps = await response.json();
        dispatch(load_on_event(rsvps));
    }
}


export const createRsvp = (event) => async (dispatch) => {
    console.log('event id', event)
    const response = await fetch(`/api/rsvps/${event}`, {
        method: 'POST'
    });

    if(response.ok){
        const rsvp = await response.json();
        dispatch(create(rsvp));
    }
}


export const deleteRsvp = (id) => async (dispatch) => {
    console.log(id)
    const response = await fetch(`/api/rsvps/${id}`, {
        method: 'DELETE'
    });

    if(response.ok){
        dispatch(deleted(id));
    }
}



const RsvpReducer = (state = [], action) => {
    switch(action.type){
        case LOAD_ALL:
            return action.rsvp;
        case LOAD_RSVP_ON_EVENT:
            return action.rsvp;
        case CREATE:
            return [...state, action.rsvp];
        case DELETE:
            return state.filter(rsvp => rsvp.id !== action.id);
        default:
            return state;
    }
}

export default RsvpReducer;
