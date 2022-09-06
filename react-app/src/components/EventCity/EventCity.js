import React from 'react'
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';

import {loadEventsByCity} from '../../store/event';




function EventCity() {

    const events = useSelector(state => state.events);

    // useEffect(() => {
    //     dispatch(loadEventsByCity());
    // },[dispatch]);

  return (
    <div className="feed">
                    < div className="feed-events-container">
                        {events && events.length > 0 ? events.map(event => (
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
                            </div>
                        )) : <h1>No Events Found Please Try Another City (Miami, San Francisco, New York)</h1>}
                    </div>
        </div>
  )
}

export default EventCity
