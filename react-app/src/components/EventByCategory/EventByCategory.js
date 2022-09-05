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
    {events && events.map(event => (
        event.category === category ? (
            <>
            <NavLink to={`/events/${event.id}`} className="event-link">
              <h1>{event.title}</h1>
              <img src={event.event_imgs} alt="event-img" />
              <p>{event.event_description}</p>
              <p>{event.event_date}</p>
              <p>{event.event_city}, {event.event_state} {event.event_zipcode}</p>
              <p>{event.category}</p>
            </NavLink>
            </>
        ) :
        <>
        </>
    ))}



    </>
  )
}

export default EventByCategory
