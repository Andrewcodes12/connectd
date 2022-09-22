import React, {useEffect} from 'react';
import {useParams,NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loadEvents } from '../../store/event';

import './eventByCategory.css'
import Categories from '../Categories/Categories';

function EventByCategory() {
    const events = useSelector(state => state.events);
    const dispatch = useDispatch();
    const {category} = useParams();

    useEffect(() => {
        dispatch(loadEvents());
    } , []);


  return (
    <>
    <Categories />
    <div className="feed">
      <div className="feed-events-container">
        {events && events.map(event => (
            event.category === category ? (
                <div className="feed-event" key={event.id}>
                <NavLink to={`/events/${event.id}`} className="event-link">
                  <div className="feed-event-img">
                    <img src={event.event_imgs} alt="event-img" />
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
            ) :
            <>
            </>
        ))}
      </div>
  </div>
    </>
  )
}

export default EventByCategory
