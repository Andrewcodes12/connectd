import React, {useEffect,useState } from 'react';
import {useParams, NavLink} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';


import { loadUserInfo } from '../../store/user';
import { loadEvents } from '../../store/event';




function UserProfile() {
  const [loading, setLoading] = useState(true);

  const users = useSelector(state => state.users.users);
  const events = useSelector(state => state.events);

  const dispatch = useDispatch();

  console.log(users)
  const {userId} = useParams();


  useEffect(() => {
    dispatch(loadUserInfo());
    dispatch(loadEvents());
    setLoading(false);
  } , []);


  return (
    <>
    {users && users.map(user => (
      user.id === parseInt(userId) ? (
        <>
        <h1>{user.username}</h1>
        <img src={user.user_image} alt="event-img" />
        <p>{user.user_bio}</p>
        <p>{user.city}, {user.state} {user.zipcode}</p>

        {events && events.map(event => (
          event.id === event.user_id ? (
              <div className="user-event-container">
              <h4 className="user-event-name">{event.title}</h4>
              <img src={event.event_imgs} alt="profile-img" className="user-event-pic"/>
              <p>{event.description}</p>
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
