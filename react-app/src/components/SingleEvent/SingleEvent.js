import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { loadEvents,updateEvent } from '../../store/event';
import { loadUserInfo } from '../../store/user';

import './singleEvent.css';
import EditEvent from '../EditEvent/EditEvent';



function SingleEvent() {
  const events = useSelector(state => state.events);
  const users = useSelector(state => state.users.users);



  const dispatch = useDispatch();
  const {eventsId} = useParams();

  useEffect(() => {
    dispatch(loadEvents());
    dispatch(loadUserInfo());
  } , []);


  return (
    <>
    {events && events.map(event => (
      event.id === parseInt(eventsId) ? (
        <>
        <h1>{event.title}</h1>
        <img src={event.event_imgs} alt="event-img" />
        <p>{event.event_description}</p>
        <p>{event.event_date}</p>
        <p>{event.event_city}, {event.event_state} {event.event_zipcode}</p>
        <p>{event.category}</p>

        <div className="edit-post">
          <EditEvent event={event} />
        </div>
        
        <NavLink to={`/users/${event.user_id}`} className="event-link">
          {users && users.map(user => (
            user.id === event.user_id ? (
              <div className="user-event-container">
              <h4>{user.username}</h4>
              <img src={user.user_image} alt="profile-img" />
              </div>
            ) : null
          ))}
        </NavLink>
      </>
      ) :
      <>
      </>
  ))}
    </>
  )
}

export default SingleEvent
