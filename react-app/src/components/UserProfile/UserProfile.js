import React, {useEffect} from 'react';
import {NavLink, useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import './userProfile.css'

import { loadEvents, filterEventsByDate } from '../../store/event';
import { loadUserInfo } from '../../store/user';
import EdituserProfile from '../EditUserProfile/EdituserProfile';


import NavBar from '../Navbar/Navbar';

function UserProfile() {
  const events = useSelector(state => state.events);
  const users = useSelector(state => state.users.users);

  const history = useHistory();


  const dispatch = useDispatch();
  const {userId} = useParams();

  useEffect(() => {
    dispatch(loadEvents());
    dispatch(loadUserInfo());
  } , []);


  const handleFilterByDate = async (e) => {
    e.preventDefault();
    dispatch(filterEventsByDate());
}

function goToEvent(eventId) {
  history.push(`/events/${eventId}`);
}

  return (
    <>
    <NavBar />
    <div className='user-profile-container'>
      {users && users.map(user => (
        user.id === parseInt(userId) ? (
          <>
          <h1 className="user-profile-name">{user.username}</h1>
          <img src={user.user_image} alt="user-img" className="user-profile-img"/>
          <p className="user-profile-bio">{user.user_bio}</p>
          <p className="user-profile-location">{user.city}, {user.state} {user.zipcode}</p>

          <div className="user-profile-btns">
            <EdituserProfile user={user}/>
            <button onClick={handleFilterByDate}>Filter by Date</button>
          </div>

          <div className="user-profile-events">
            {events && events.map(event => (
              user.id === event.user_id ? (
                <div className="user-profile-event" key={user.id}>

                    <h4 className="user-event-title">{event.title}</h4>
                    <img src={event.event_imgs} alt="profile-img" className="user-event-img" onClick={() => goToEvent(event.id)}/>
                    <p className="user-event-description">{event.event_description}</p>
                    <p className="user-event-date">{event.event_date}</p>
                    <p className="user-event-location">{event.event_city}, {event.event_state} {event.event_zipcode}</p>
                    <p className="user-event-category">{event.category}</p>

                </div>
              ) : null
            ))}
          </div>
        </>
        ) :
        <>
        </>
    ))}

    </div>
    </>
  )
}

export default UserProfile
