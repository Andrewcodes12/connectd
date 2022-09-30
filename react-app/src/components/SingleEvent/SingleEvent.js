import React, {useEffect, useState} from 'react';
import {NavLink, useParams,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { loadEvents,deleteEventById,loadEventsByCity,loadUserEvents } from '../../store/event';
import { loadUserInfo } from '../../store/user';
import { loadReviewsByEvent } from '../../store/review';



import './singleEvent.css';
import EditEvent from '../EditEvent/EditEvent';
// import EditReviews from '../EditReviews/EditReviews';
import AddReviews from '../AddReviews/AddReviews';
import Maps from '../Map/Map';
import RsvpdEvents from '../RSVPD/RsvpdEvents';
import EventCity from '../EventCity/EventCity';
import NavBar from '../Navbar/Navbar';


function SingleEvent() {
  const events = useSelector(state => state.events);
  const users = useSelector(state => state.users.users);
  const reviews = useSelector(state => state.reviews);
  const sessionUser = useSelector(state => state.session);

  const [copyURL, setCopyURL] = useState(`http://get-connctd.com/events/${events.id}`);
  const [isClicked, setIsClicked] = useState(false);
  const[shareClicked, setShareClicked] = useState(false);

  const {eventsId} = useParams();


  const dispatch = useDispatch();
  const history = useHistory();



  useEffect(() => {
    dispatch(loadEvents());
    dispatch(loadUserInfo());
    dispatch(loadReviewsByEvent(eventsId));
  } , []);

  const deleteEvent = (id) => {
    dispatch(deleteEventById(id));
    history.push('/feed');
  }



function sliceTimeOffDate(){
  let slicedDate = events.event_date.slice(0,10);
  return slicedDate;
}

function goToCityPage(cities){
  dispatch(loadEventsByCity(cities));
  history.push(`/events/search/city/${cities}`);
}

function goToUserPage(userId){
  history.push(`/users/${userId}`);
}


const goToReviews = () => {
  window.scrollTo(0, 1500);
}


const getAverageRating = () => {
  let total = 0;
  let average = 0;
  if(reviews.length > 0){
    reviews.forEach(review => {
      total += review.review_rating;
    })
    average = total / reviews.length;
  }
  return average.toFixed(2);
}

const goToCategoryPage = (category) => {
  history.push(`/events/search/${category}`);
}



  return (
    <>
    <NavBar />
      <div className="single-event-container">
        {events && events.map(event => (
          event.id === parseInt(eventsId) ? (
            <>
            <div className="single-event">
              <h1 className="single-event-header">{event.title}</h1>
              <div className="event-reviews" ><i className="fa-solid fa-star review-star" ></i> <span className="single-event-average-rating">{getAverageRating()}</span> <i className="fa-solid fa-circle"></i> <span className="review-length" onClick={goToReviews}> {reviews.length} review(s)</span> <i className="fa-solid fa-circle"></i> <p className="single-event-location"> <span onClick={() => goToCityPage(event.event_city)}>{event.event_city}, {event.event_state} {event.event_zipcode}</span></p> <i className="fa-solid fa-circle"></i>  <div className="share-event-btn" onClick={() => {navigator.clipboard.writeText(`http://stay-connctd.com/events/${event.id}`)}}> <i className="fas fa-share-alt share"></i><span>Share</span></div> </div>
              <img src={event.event_imgs} alt="event-img" className="event-img"/>
              <p className="single-event-description">{event.event_description}</p>
              <p className="single-event-date">{event.event_date.slice(0,16)}</p>
              <button className="single-events-in-city"onClick={() => goToCityPage(event.event_city)}>See other events in {event.event_city}</button>
              <p className="single-event-category" onClick={() => goToCategoryPage(event.category)}>{event.category}</p>
            </div>

            {/* <div className="single-event-right"> */}
                <div className="event-creator">
                </div>

                {users && users.map(user => (
                  user.id === event.user_id ? (
                    <div className="user-event-container">
                    <img src={user.user_image} alt="profile-img" className="single-event-image" onClick={() => goToUserPage(event.user_id)}/>
                    <h4 className='single-event-host'>{event.title} is hosted by {user.username}</h4>
                    </div>
                  ) : null
                ))}



              <div className="rsvp">
                <RsvpdEvents event={event}/>
              </div>

              <div className="share-event-container">
                <button className="share-event" onClick={() => {navigator.clipboard.writeText(`http://stay-connctd.com/events/${event.id}`)}}><i className="fas fa-share-alt share-this-event"></i></button>
                <span> Share this event with friends!</span>
              </div>


            {sessionUser.id === event.user_id ? (
              <div className="edit-delete-container">
                <div className="edit-event">
                  <EditEvent event={event} />
                </div>

                <div className="delete-event">
                  <button onClick={() => deleteEvent(event.id)}>Delete Event</button>
                </div>
              </div>

            ) : null}

            <div className="map">
              <Maps event={event}/>
            </div>


            <div className="add-reviews">
            <AddReviews event={event} users={users}/>
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

export default SingleEvent
