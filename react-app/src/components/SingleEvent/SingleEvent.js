import React, {useEffect} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { loadEvents } from '../../store/event';
import { loadUserInfo } from '../../store/user';

import './singleEvent.css';



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

        {users && users.map(user => (
          user.id === event.user_id ? (
            <NavLink to={`/users/${user.id}`}>
              <div className="user-event-container">
              <h4 className="user-event-name">{user.username}</h4>
              <img src={user.user_image} alt="profile-img" className="user-event-pic"/>
              </div>
            </NavLink>
          ) : null
        ))}

      </>
      ) :
      <>
      </>
  ))}
    </>
  )
}

export default SingleEvent
