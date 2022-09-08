import React, {useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { loadEvents } from '../../store/event';
import { loadUserInfo } from '../../store/user';
import EdituserProfile from '../EditUserProfile/EdituserProfile';


function UserProfile() {
  const events = useSelector(state => state.events);
  const users = useSelector(state => state.users.users);


  const dispatch = useDispatch();
  const {userId} = useParams();

  useEffect(() => {
    dispatch(loadEvents());
    dispatch(loadUserInfo());
  } , []);


  return (
    <>
    {users && users.map(user => (
      user.id === parseInt(userId) ? (
        <>
        <h1>{user.username}</h1>
        <img src={user.user_image} alt="user-img" />
        <p>{user.user_bio}</p>
        <p>{user.city}, {user.state} {user.zipcode}</p>
          <EdituserProfile user={user}/>
          
          {events && events.map(event => (
            user.id === event.user_id ? (
              <div className="user-event-container">
              <h4>{event.title}</h4>
              <img src={event.event_imgs} alt="profile-img" />
              <p>{event.event_description}</p>
              <p>{event.event_date}</p>
              <p>{event.event_city}, {event.event_state} {event.event_zipcode}</p>
              <p>{event.category}</p>
              </div>
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

export default UserProfile
