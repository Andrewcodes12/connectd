import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';


import {loadEvents} from '../../store/event';


import './feed.css'

function Feed() {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events);
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(loadEvents());
    } , []);

    // const deleteEvent = (id) => {
    //     dispatch(deleteEventById(id));
    // }

  return (
    <div className="feed">
                    <div className="feed-events-container">
                        {events && events.map(event => (
                            <div className="feed-event" key={event.id}>
                                <NavLink to={`/events/${event.id}`} className="event-link">
                                <div className="feed-event-img">
                                    <img src={event.event_imgs} alt="event-img" className='feed-event-img'/>
                                    </div>
                                    <div className="feed-event-info">
                                        <h3 className="event-title">{event.title}</h3>
                                        <p className="event-description">{event.event_description}</p>
                                        <p className="event-date">{event.event_date}</p>
                                        <p className="event-location">{event.event_city}, {event.event_state} {event.event_zipcode}</p>
                                        <p className="event-category">{event.category}</p>
                                    </div>
                                </NavLink>
                                {/* <button onClick={() => deleteEvent(event.id)}><i className="fas fa-trash-alt"> </i></button> */}
                            </div>
                        ))}
                    </div>
        </div>
  );
}



export default Feed
