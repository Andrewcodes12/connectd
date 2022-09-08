const LOAD = 'LOAD_EVENTS';
const LOAD_BY_ID = 'LOAD_EVENT_BY_ID';
const CREATE = 'CREATE_EVENT';
const UPDATE = 'UPDATE_EVENT';
const DELETE = 'DELETE_EVENT';
const LOAD_BY_CATEGORY = 'LOAD_EVENTS_BY_CATEGORY';
const LOAD_BY_CITY = 'LOAD_EVENTS_BY_CITY';

const load = (events) => ({
    type:LOAD,
    events
})

const loadById = (event) => ({
    type:LOAD_BY_ID,
    event
})

const create = (event) => ({
    type:CREATE,
    event
})

const update = (event) => ({
    type:UPDATE,
    event
})

const deleteEvent = (id) => ({
    type:DELETE,
    id
})

const loadByCategory = (events) => ({
    type:LOAD_BY_CATEGORY,
    events
})

const loadByCity = (events) => ({
    type:LOAD_BY_CITY,
    events
})

export const loadEvents = () => async (dispatch) => {
    const response = await fetch('/api/events/');

    if(response.ok){
        const events = await response.json();
        dispatch(load(events));
    }
}

export const loadEventById = (id) => async (dispatch) => {
    const response = await fetch(`/api/events/${id}/`);

    if(response.ok){
        const event = await response.json();
        dispatch(loadById(event));
    }
}

export const createEvent = (event) => async (dispatch) => {
    const response = await fetch('/api/events/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    });

    if(response.ok){
        const event = await response.json();
        console.log(event)
        dispatch(create(event));
    }
}

export const updateEvent = (event) => async (dispatch) => {
    const response = await fetch(`/api/events/${event.id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    });

    if(response.ok){
        const event = await response.json();
        dispatch(update(event));
    }
}


export const deleteEventById = (id) => async (dispatch) => {
    const response = await fetch(`/api/events/${id}/delete`, {
        method: 'DELETE'
    });

    if(response.ok){
        dispatch(deleteEvent(id));
    }
}


export const loadEventsByCategory = (category) => async (dispatch) => {
    const response = await fetch(`/api/events/search/${category}/`);

    if(response.ok){
        const events = await response.json();
        dispatch(loadByCategory(events));
    }
}

export const loadEventsByCity = (city) => async (dispatch) => {
    const response = await fetch(`/api/events/search/city/${city}`);

    if(response.ok){
        const events = await response.json();
        dispatch(loadByCity(events));
    }

}




const EventReducer = (state = [], action) => {
    switch(action.type){
        case LOAD:
            return action.events;
        case LOAD_BY_ID:
            return action.event;
        case CREATE:
            return [...state, action.event];
        case UPDATE:
            return state.map(event => event.id === action.event.id ? action.event : event);
        case DELETE:
            return state.filter(event => event.id !== action.id);
        case LOAD_BY_CATEGORY:
            return action.events;
        case LOAD_BY_CITY:
            return action.events;
        // case LOAD:
        //     return {...state, events: action.events};
        // case LOAD_BY_ID:
        //     return {...state, event: action.event};
        // case CREATE:
        //     return {...state, events: [...state.events, action.event]};
        // case UPDATE:
        //     return {...state, events: state.events.map(event => event.id === action.event.id ? action.event : event)};
        // case DELETE:
        //     return {...state, events: state.events.filter(event => event.id !== action.id)};
        // case LOAD_BY_CATEGORY:
        //     return {...state, events: action.events};
        // case LOAD_BY_CITY:
        //     return {...state, events: action.events};
        default:
            return state;
    }
}

export default EventReducer;
