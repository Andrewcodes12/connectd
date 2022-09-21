import React, {useEffect, useState} from 'react';
import {NavLink, useParams,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { loadEvents,deleteEventById,loadEventsByCity } from '../../store/event';
import { loadUserInfo } from '../../store/user';
import { loadReviewsByEvent } from '../../store/review';
import { deleteReviewById, sortReviewsByRating, sortReviewsByRatingAsc,sortReviewsByDate  } from '../../store/review';


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

  const [copyURL, setCopyURL] = useState(`http://stay-connctd.com/events/${events.id}`);
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

  const deleteReview = (id) => {
    dispatch(deleteReviewById(id));
  }

  const sortByHigestRating = async (e) => {
    e.preventDefault();
    dispatch(sortReviewsByRating(eventsId));
    setIsClicked(true);
}

const sortByLowestRating = async (e) => {
    e.preventDefault();
    dispatch(sortReviewsByRatingAsc(eventsId));
    setIsClicked(true);
}

const sortByDate = async (e) => {
    e.preventDefault();
    dispatch(sortReviewsByDate(eventsId));
    setIsClicked(true);
}

const removeSort = async (e) => {
    e.preventDefault();
    dispatch(loadReviewsByEvent(eventsId));
    setIsClicked(false);
}

function sliceTimeOffDate(){
  let slicedDate = events.event_date.slice(0,10);
  return slicedDate;
}

function goToCityPage(cities){
  dispatch(loadEventsByCity(cities));
  history.push(`/events/search/city/${cities}`);
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
              <p className="single-event-date">{event.event_date}</p>
              <button className="single-events-in-city"onClick={() => goToCityPage(event.event_city)}>See other events in {event.event_city}</button>
              <p className="event-category">{event.category}</p>
            </div>


                <div className="event-creator">
                </div>
                <NavLink to={`/users/${event.user_id}`} className="event-link">
                {users && users.map(user => (
                  user.id === event.user_id ? (
                    <div className="user-event-container">
                    <h4 className='single-event-host'>{event.title} is hosted by {user.username}</h4>
                    <img src={user.user_image} alt="profile-img" className="single-event-image"/>
                    </div>
                  ) : null
                ))}
              </NavLink>


              <div className="rsvp">
                <RsvpdEvents event={event}/>
              </div>

              <div className="share-event-container">
                <span> <strong>Share this event with friends!</strong></span>
                <button className="share-event" onClick={() => {navigator.clipboard.writeText(`http://stay-connctd.com/events/${event.id}`)}}><i className="fas fa-share-alt share-this-event"></i></button>
              </div>



              <div className="edit-delete-container">
                <div className="edit-event">
                  <EditEvent event={event} />
                </div>

                <div className="delete-event">
                  <button onClick={() => deleteEvent(event.id)}><i className="fas fa-trash-alt"> </i></button>
                </div>
              </div>


            <div className="map">
              <Maps event={event}/>
            </div>


            <div className="add-reviews">
            <AddReviews event={event} />
            </div>

            <h4>Reviews</h4>
              <div className="review-sort">
                  {isClicked ? (
                    <button onClick={removeSort}>Remove filter</button>
                  ) : (
                    <div className="single-event-filter-buttons">
                    <button onClick={sortByHigestRating}>Sort by Highest Rating</button>
                    <button onClick={sortByLowestRating}>Sort by Lowest Rating</button>
                    <button onClick={sortByDate}>Sort by Date</button>
                    </div>
                  )}
              </div>
              {reviews && reviews.map(review => (
                review.event_id === event.id ? (
                  <div className="review-container">
                    <p>{review.review_body}</p>
                    <p>{review.created_at}</p>
                    <p>{review.review_rating}</p>

                    <div className="edit-delete-container">
                      <div className='edit-reviews'>
                      {/* <EditReviews review={review} /> */}
                      </div>
                      <div className="delete-review">
                        <button onClick={() => deleteReview(review.id)}><i className="fas fa-trash-alt"> </i></button>
                      </div>
                    </div>

                    {users && users.map(user => (
                      user.id === review.user_id ? (
                        <div className="user-review-container">
                          <NavLink to={`/users/${user.id}`} className="review-link">
                            <p className="user-review-username">{user.username}</p>
                            <img src={user.user_image} alt="profile-img" className="user-review-image"/>
                          </NavLink>
                        </div>
                      ) : null
                      ))}
                  </div>
                ) : null
              ))}
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
