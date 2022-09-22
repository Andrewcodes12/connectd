import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { NavLink, useParams,useHistory } from 'react-router-dom';

import {loadEventsByCity} from '../../store/event';

import NavBar from '../Navbar/Navbar';

import './eventCity.css';

function EventCity() {

    const events = useSelector(state => state.events);

    const history = useHistory();
    const dispatch = useDispatch();

    const {city} = useParams();

    // useEffect(() => {
    //     dispatch(loadEventsByCity());
    // },[dispatch]);

    function sliceTimeOffDate(){
        let slicedDate = events.event_date.slice(0,10);
        return slicedDate;
    }

    const findMiami = async (e) => {
        e.preventDefault()
        dispatch(loadEventsByCity("miami"))
        history.push(`/events/search/city/miami/`)
    }

    const findNewYork = async (e) => {
    e.preventDefault()
    dispatch(loadEventsByCity("new york"))
    history.push(`/events/search/city/new%20york/`)
    }

    const findSanFran = async (e) => {
    e.preventDefault()
    dispatch(loadEventsByCity("san francisco"))
    history.push(`/events/search/city/san%20francisco/`)
    }

    const findChicago = async (e) => {
    e.preventDefault()
    dispatch(loadEventsByCity("chicago"))
    history.push(`/events/search/city/chicago/`)
    }

    const findAtlanta = async (e) => {
    e.preventDefault()
    dispatch(loadEventsByCity("atlanta"))
    history.push(`/events/search/city/atlanta/`)
    }


  return (
    <>
    <NavBar />
    <div className="feed">

        {events.length > 0 ? <h3 className="single-event-header">Heres whats happening in {city}</h3> :
        <>
            <h1 className="single-event-header">No Events found in {city}.</h1>
            <h3 className="single-event-header">Check out some events happening in these cities</h3>
            <div className="city-btns">
                <button className="city-btn" onClick={findMiami}>Miami</button>
                <button className="city-btn" onClick={findNewYork}>New York</button>
                <button className="city-btn" onClick={findSanFran}>San francisco</button>
                <button className="city-btn" onClick={findAtlanta}>Atlanta</button>
                <button className="city-btn" onClick={findChicago}>Chicago</button>
            </div>
        </>
        }

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
                            <></>
                        }
                    </div>
        </div>
    </>
  )
}

export default EventCity
