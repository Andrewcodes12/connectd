import React, {useEffect, useState} from 'react';
import {NavLink, useParams,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userProfile } from '../../store/user';
import {loadEvents} from '../../store/event';


function LoggedUserProfile({sessionUser}) {
  const user = useSelector(state => state.users);
  const events = useSelector(state => state.events);

  const [loading , setLoading] = useState(false);

  const dispatch = useDispatch();
  const {userId} = useParams();

  useEffect(() => {
    dispatch(loadEvents());
    dispatch(userProfile(userId));
  }, [dispatch]);


  function sliceTimeOffDate(){
    let slicedDate = user.events.event_date.slice(0,10);
    return slicedDate;
  }



  return (
    <>
      {loading ?
        <div className='loading'>
          <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='loading' />
        </div>
      :
        <div className='user-profile-container'>
          <div className='user-profile-img-container'>
            <img src={sessionUser.user_image} alt='user-profile-img' className='user-profile-img'/>
          </div>
        <div className='user-profile-info-container'>
          <div className='user-profile-info'>
            <h1 className='user-profile-username'>{sessionUser.username}</h1>
            <h3 className='user-profile-bio'>{sessionUser.user_bio}</h3>
          </div>
        </div>
        <div className='user-profile-events-container'>
          <h2 className='user-profile-events-header'>Events I'm Hosting</h2>
          <div className='user-profile-events'>
              {user.events && user.events.length > 0 ? user.events.map(event => (
                <><div className='user-profile-event' key={event.id}>
                  <NavLink to={`/events/${event.id}`} className='user-profile-event-link'>
                    <div className='user-profile-event-img'>
                      <img src={event.event_imgs} alt='event-img' className='user-profile-event-img' />
                    </div>
                    <div className='user-profile-event-info'>
                      <h3 className='user-profile-event-title'>{event.title}</h3>
                      <p className='user-profile-event-description'>{event.event_description}</p>
                      <p className='user-profile-event-date'>{sliceTimeOffDate}</p>
                      <p className='user-profile-event-location'>{event.event_city}, {event.event_state} {event.event_zipcode}</p>
                      <p className='user-profile-event-category'>{event.category}</p>
                    </div>
                  </NavLink>
                </div><div className="user-rsvp-events-container">
                    <h2 className="user-rsvp-events-header">Events I'm Attending</h2>
                    <div className="user-rsvp-events">
                      {user.events && user.events.length > 0 ? user.events.map(event => (
                        <div className="user-rsvp-event" key={event.id}>
                          <NavLink to={`/events/${event.event_id}`} className="user-rsvp-event-link">
                            <div className="user-rsvp-event-img">
                              <img src={event.event_imgs} alt="event-img" className="user-rsvp-event-img" />
                            </div>
                            <div className="user-rsvp-event-info">
                              <h3 className="user-rsvp-event-title">{event.title}</h3>
                              <p className="user-rsvp-event-description">{event.event_description}</p>
                              <p className="user-rsvp-event-date">{sliceTimeOffDate}</p>
                              <p className="user-rsvp-event-location">{event.event_city}, {event.event_state} {event.event_zipcode}</p>
                              <p className="user-rsvp-event-category">{event.category}</p>
                            </div>
                          </NavLink>
                        </div>
                      )) : <div className="user-rsvp-search-error">
                        <h1 className="user-rsvp-search-error-message">You have not RSVP'd to any events.</h1>
                      </div>}
                    </div>
                  </div></>
            )) : <div className='user-profile-search-error'>
                  <h1 className='user-profile-search-error-message'>You are not hosting any events.</h1>
                </div>
            }
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default LoggedUserProfile
