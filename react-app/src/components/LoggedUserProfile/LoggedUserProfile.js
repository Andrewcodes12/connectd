import React, {useEffect, useState} from 'react';
import {NavLink, useParams,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userProfile } from '../../store/user';
import {deleteRsvp} from '../../store/rsvp';

import NavBar from '../Navbar/Navbar';
import EdituserProfile from '../EditUserProfile/EdituserProfile';

import './loggedInUserProfile.css';

function LoggedUserProfile({sessionUser}) {
  const user = useSelector(state => state.users);
  const reviews = useSelector(state => state.reviews);


  const [loading , setLoading] = useState(false);
  const [username, setUsername] = useState(sessionUser.username);
  const [email, setEmail] = useState(sessionUser.email);
  const [first_name, setFirstName] = useState(sessionUser.first_name);
  const [last_name, setLastName] = useState(sessionUser.last_name);
  const [city, setCity] = useState(sessionUser.city);
  const [state, setState] = useState(sessionUser.state);
  const [zipcode, setZipcode] = useState(sessionUser.zipcode);
  const [user_image, setUserImage] = useState(sessionUser.user_image);
  const [user_bio, setUserBio] = useState(sessionUser.user_bio);
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();

  const {userId} = useParams();

  useEffect(() => {
    dispatch(userProfile(userId));
  }, [dispatch]);


  function sliceTimeOffDate(){
    let slicedDate = user.events.event_date.slice(0,10);
    return slicedDate;
  }




  return (
    <>
    <NavBar />
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
            <EdituserProfile user={sessionUser} className='user-profile-edit'/>
          </div>
        </div>
        <div className='user-profile-events-container'>
          <div className='user-profile-events'>
                  <h2 className='user-profile-events-header'>
                    Events I'm Hosting
                  </h2>
              <div className="feed-events-container">
              {user.eventsHosting && user.eventsHosting.length > 0 ? user.eventsHosting.map(event => (
                <>
                  <div className='feed-event' key={event.id}>
                    <NavLink to={`/events/${event.id}`} className='event-link'>
                      <div className='feed-event-img'>
                        <img src={event.event_imgs} alt='event-img' className='feed-event-img' />
                      </div>
                      <div className='feed-event-info'>
                        <h3 className='event-title'>{event.title}</h3>
                        <p className='event-description'>{event.event_description}</p>
                        <p className='event-date'>{sliceTimeOffDate}</p>
                        <p className='event-location'>{event.event_city}, {event.event_state} {event.event_zipcode}</p>
                        <p className='event-category'>{event.category}</p>
                      </div>
                    </NavLink>
                  </div>
                </>
                )
              ) : <h1 className='user-profile-no-events'>You are not hosting any events.</h1>}
              </div>
                <>
                <div className="user-rsvp-events-container">
                    <div className="user-rsvp-events">
                        <h2 className="user-rsvp-events-header">
                          Events I'm Attending
                        </h2>
                      <div className="feed-events-container">
                      {user.eventsAttending && user.eventsAttending.length > 0 ? user.eventsAttending.map(event => (
                        <div className="feed-event" key={event.id}>
                          <NavLink to={`/events/${event.id}`} className="event-link">
                            <div className="feed-event-img">
                              <img src={event.event_imgs} alt="event-img" className="feed-event-img" />
                            </div>
                            <div className="feed-event-info">
                              <h3 className="event-title">{event.title}</h3>
                              <p className="event-description">{event.event_description}</p>
                              <p className="event-date">{sliceTimeOffDate}</p>
                              <p className="event-location">{event.event_city}, {event.event_state} {event.event_zipcode}</p>
                              <p className="event-category">{event.category}</p>
                            </div>
                          </NavLink>
                        </div>

                      )) : <div className="user-rsvp-search-error">
                        <h1 className="user-rsvp-search-error-message">You have not RSVP'd to any events.</h1>
                      </div>}
                    </div>
                  </div>
                </div>
                  </>
          </div>
        </div>
      </div>
    }

    </>
  )
}

export default LoggedUserProfile
