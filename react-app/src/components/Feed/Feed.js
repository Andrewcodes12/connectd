import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';


import {loadEvents, filterEventsByDate, sortByRsvpPopular, sortByRsvpLeastPopular} from '../../store/event';

import NavBar from '../Navbar/Navbar';
import Categories from '../Categories/Categories';

import './feed.css'

function Feed() {
    const [isClicked, setIsClicked] = useState(false);

    const dispatch = useDispatch();
    const events = useSelector(state => state.events);
    // const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(loadEvents());
    }  , [dispatch]);

    const handleFilterByDate = async (e) => {
        e.preventDefault();
        dispatch(filterEventsByDate());
        setIsClicked(true);
    }

    const handleSortByRsvpPopular = async (e) => {
        e.preventDefault();
        dispatch(sortByRsvpPopular());
        setIsClicked(true);
    }

    const handleSortByRsvpLeastPopular = async (e) => {
        e.preventDefault();
        dispatch(sortByRsvpLeastPopular());
        setIsClicked(true);
    }

    const handleRemoveFilterByDate = async (e) => {
        e.preventDefault();
        dispatch(loadEvents());
        setIsClicked(false);
    }

    // function sliceTimeOffDate(){
    //     let slicedDate = events.event_date.slice(0,15);
    //     console.log(slicedDate);
    //     return slicedDate;
    // }


  return (
    <>

    <Categories />
    <div className="feed">
                <div className="event-filter-buttons-container">
                    {isClicked ? <button className="event-filter-button" onClick={handleRemoveFilterByDate}>Remove Filter</button>
                    :
                    <div className='event-filter-buttons'>
                    <button className="event-filter-button" onClick={handleFilterByDate}>Filter by Date</button>
                    <button className="event-filter-button" onClick={handleSortByRsvpPopular}>Most popular events</button>
                    <button className="event-filter-button" onClick={handleSortByRsvpLeastPopular}>Least popular events</button>
                    </div>
                    }
                </div>

                    <div className="feed-events-container">
                        {events && events.map(event => (
                            <div className="feed-event" key={event.id}>
                                <NavLink to={`/events/${event.id}`} className="event-link">
                                <div className="feed-event-img">
                                    <img src={event.event_imgs} alt="event-img" className='feed-event-img'/>
                                    </div>
                                    <div className="feed-event-info">
                                        <h3 className="event-title">{event.title}</h3>
                                        <p className="event-description">{event.event_description}</p>
                                        <p className="event-date">{event.event_date.slice(0,16)}</p>
                                        <p className="event-location">{event.event_city}, {event.event_state} {event.event_zipcode}</p>
                                        <p className="event-category">{event.category}</p>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </div>
        </div>
    </>
  );
}



export default Feed
