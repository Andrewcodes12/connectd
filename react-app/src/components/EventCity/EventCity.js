import React from 'react'
import {useSelector} from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import {loadEventsByCity} from '../../store/event';

import NavBar from '../Navbar/Navbar';


function EventCity() {

    const events = useSelector(state => state.events);

    const {city} = useParams();

    // useEffect(() => {
    //     dispatch(loadEventsByCity());
    // },[dispatch]);

    function sliceTimeOffDate(){
        let slicedDate = events.event_date.slice(0,10);
        return slicedDate;
      }



  return (
    <>
    <NavBar />
    <div className="feed">

        {events.length > 0 ? <h3 className="single-event-header">Heres whats happening in {city}</h3> : null}

                    <div className="feed-events-container">
                        {events && events.length > 0 ? events.map(event => (
                            <div className="feed-event" key={event.id}>
                                <NavLink to={`/events/${event.id}`} className="event-link">
                                    <div className="feed-event-img">
                                        <img src={event.event_imgs} alt="event-img" className='feed-event-img'/>
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
                        )) :
                        <div className="search-error">
                            <h1 className="search-error-message">No Events found in {city}. Please try another city.</h1>
                        </div>
                        }
                    </div>
        </div>
    </>
  )
}

export default EventCity
