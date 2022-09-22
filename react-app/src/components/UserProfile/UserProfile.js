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
          <div className='user-profile-info'>
          <h1 className="user-profile-name">Hi, I'm {user.username}</h1>
            <EdituserProfile user={user} className="user-profile-edit"/>
            <img src={user.user_image} alt="user-img" className="user-profile-img"/>
            <p className="user-profile-bio">{user.user_bio}</p>
            <p className="user-profile-location">Lives in {user.city}, {user.state}</p>
            <div className="a">
            </div>
          </div>

          <div className="user-profile-btns">
            <h3>Events I'm Hosting</h3>
            <button onClick={handleFilterByDate}>Filter by Date</button>
          </div>

          <div className="feed-events-container">
            {events && events.map(event => (
              user.id === event.user_id ? (
                <div className="feed-event" key={user.id}>
                  <NavLink to={`/events/${event.id}`} className="event-link" key={event.id} onClick={() => goToEvent(event.id)}>
                    <div className="feed-event-img">
                      <img src={event.event_imgs} alt="profile-img" className="feed-event-img" />
                    </div>
                  <div className="feed-event-info">
                      <h4 className="event-title">{event.title}</h4>
                      <p className="event-description">{event.event_description}</p>
                      <p className="event-date">{event.event_date}</p>
                      <p className="event-location">{event.event_city}, {event.event_state} {event.event_zipcode}</p>
                      <p className="event-category">{event.category}</p>
                  </div>
                  </NavLink>
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
