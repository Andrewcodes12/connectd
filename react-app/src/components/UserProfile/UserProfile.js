import React, {useEffect,useState} from 'react';
import {NavLink, useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import './userProfile.css'

import { loadEvents, loadUserEvents, filterEventsByDate } from '../../store/event';
import { loadUserInfo,userProfile } from '../../store/user';
import EdituserProfile from '../EditUserProfile/EdituserProfile';


import NavBar from '../Navbar/Navbar';

function UserProfile() {
  const [isClicked, setIsClicked] = useState(false);

  const events = useSelector(state => state.events);
  const users = useSelector(state => state.users.users);
  const sessionUser = useSelector(state => state.session);

  const history = useHistory();


  const dispatch = useDispatch();
  const {userId} = useParams();



  useEffect(() => {
    dispatch(loadUserInfo(userId));
    dispatch(loadUserEvents(userId));
  }, []);




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
          <div className='user-profile-info' key={user.id}>
          <h1 className="user-profile-name">Hi, I'm {user.username}</h1>

          {sessionUser.id === user.id ? <EdituserProfile user={user} className="user-profile-edit"/> : null}

            <img src={user.user_image} alt="user-img" className="user-profile-img"/>
            <p className="user-profile-bio">{user.user_bio}</p>
            <p className="user-profile-location">Lives in {user.city}, {user.state}</p>
            <div className="a">
            </div>
          </div>

          <div className="user-profile-btns">
            <h3>Events {user.username} is Hosting.</h3>
          </div>

          <div className="feed-events-container">
            {events && events.map(event => (
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
