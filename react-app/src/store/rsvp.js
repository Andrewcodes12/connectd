const LOAD_RSVP = 'LOAD_RSVP';
const CREATE = 'CREATE_RSVP';
const DELETE = 'DELETE';


const load = (rsvp) => ({
    type:LOAD_RSVP,
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


export const loadRsvps = (eventId) => async (dispatch) => {
    const response = await fetch(`/api/rsvps/${eventId}/`);

    if(response.ok){
        const rsvps = await response.json();
        dispatch(load(rsvps));
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
        case LOAD_RSVP:
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
