import React from 'react'
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'

import { loadEventsByCity } from '../../store/event'

import friends from '../public/friends-splash-page.png'
import waving from '../public/happy-friends.jpeg'
import study from '../public/study-group.jpeg'
import newPeople from '../public/meet-new-ppl.jpeg'
import highFive from '../public/high-five-splash.png'
import ticket from '../public/ticket-splash.png'

import SearchBar from '../Searchbar/SearchBar'

import './splash.css'




function Splash() {
  const dispatch = useDispatch()
  const history = useHistory()

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

  const takeToSports = async (e) => {
    e.preventDefault()
    history.push(`/events/search/Sports`)
  }

  const takeToClubbing = async (e) => {
    e.preventDefault()
    history.push(`/events/search/Clubbing`)
  }

  const takeToStudygroup = async (e) => {
    e.preventDefault()
    history.push(`/events/search/StudyGroups`)
  }

  const takeToBoating = async (e) => {
    e.preventDefault()
    history.push(`/events/search/Boating`)
  }

  const takeToVideoGames = async (e) => {
    e.preventDefault()
    history.push(`/events/search/VideoGames`)
  }

  function takeToSignUp(e) {
    e.preventDefault()
    window.location.href = '/sign-up'
  }

  return (
    <>
      <div className="splash-container">
          <div className="splash-nav">
              <div className="splash-logo">
                  <span>Connectd</span>
              </div>
              <div className="splash-nav-links">
                  <div className='splash-login'>
                    <a href="/login" className="splash-login-btn">Login</a>
                  </div>
                  <div className='splash-login'>
                    <a href="/about" className="splash-login-btn">About</a>
                  </div>
                  <div className='splash-login'>
                    <a href="/sign-up" className="splash-login-btn">Sign Up</a>
                  </div>
              </div>
          </div>
          <div className="splash-content">
              <div className="splash-content-text">
                  <h2 className="splash-content-title">Heres a toast to all the friendships that started right here on Connectd</h2>
                  <p className="splash-content-description">
                    Looking for a someone to play chess with? Looking for a study group? Looking for some people to join you on your boat? Whatever you're looking to do, get Connectd.
                    This is a safe community for people looking to share their hobbies and interests with others or join others in their hobbies and interests.
                  </p>
                </div>
                    <img src={friends} alt="splash-img" className='splash-img'/>
          </div>
            <div className="splash-connect-with-people">
                <div className="splash-new-friends">
                    <a href="/feed"><img src={waving} alt="happy-img" className="img-splash"/>
                      <div className="waving-img-splash-div">
                        Start New Hobbies <i class="fa-sharp fa-solid fa-arrow-right"></i>
                      </div>
                    </a>
                </div>
                <div className="splash-new-friends">
                    <a href="/events/search/StudyGroups"><img src={study} alt="study-group" className="img-splash"/>
                      <div className="waving-img-splash-div">
                        Find A Study Group <i class="fa-sharp fa-solid fa-arrow-right"></i>
                      </div>
                    </a>
                </div>
                <div className="splash-new-friends">
                    <a href="/feed"><img src={newPeople} alt="meet-new-people" className="img-splash"/>
                      <div className="waving-img-splash-div">
                        Meet New People <i class="fa-sharp fa-solid fa-arrow-right"></i>
                      </div>
                    </a>
                </div>
            </div>
                <div className="splash-category-selector">
                  <h4>Search for events by category</h4>
                  <div className="splash-category-selector-btns">
                      <button onClick={takeToSports}>
                        <div className="category-splash-div">
                          Sports
                        </div>
                      </button>
                      <button onClick={takeToClubbing}>
                        <div className="category-splash-div">
                          Clubbing
                        </div>
                      </button>
                      <button onClick={takeToStudygroup}>
                        <div className="category-splash-div">
                          Study Groups
                        </div>
                      </button>
                      <button onClick={takeToBoating}>
                        <div className="category-splash-div">
                          Boating
                        </div>
                      </button>
                      <button onClick={takeToVideoGames}>
                        <div className="category-splash-div">
                         Video Games
                        </div>
                      </button>
                    </div>
                </div>
        </div>
        <div className="splash-search-container">
          <div className="splash-left-container">
            <h2>Search for Events in your city</h2>
              <div className="splash-search-bar">
                <SearchBar />
              </div>
              </div>
              <div className="splash-right-container">
                <h2>Check out Events happening in these cities</h2>
                <div className="splash-search-cities">
                  <div className="miami-splash">
                    <button onClick={findMiami}>
                      <div className="splash-search-city">
                        Miami
                      </div>
                    </button>
                  </div>
                  <div className="newyork-splash">
                    <button onClick={findNewYork}>
                      <div className="splash-search-city">
                        New York
                      </div>
                    </button>
                  </div>
                  <div className="sanfran-splash">
                    <button onClick={findSanFran}>
                      <div className="splash-search-city">
                        San Francisco
                      </div>
                    </button>
                  </div>
                  <div className="atlanta-splash">
                    <button onClick={findAtlanta}>
                      <div className="splash-search-city">
                        Atlanta
                        </div>
                    </button>
                  </div>
                  <div className="chicago-splash">
                    <button onClick={findChicago}>
                      <div className="splash-search-city">
                        Chicago
                        </div>
                    </button>
                    </div>
                </div>
              </div>

        </div>
        <div className="splash-about-us">
          <div className="splash-about-us-text">
            <h2>How Connectd Works</h2>
              <p className="about-us-text">Connect with people who share the same hobbies and interest as you.
                  Host or attend events. It's free to create an account. Sign up today!
              </p>
              <div className="splash-about-us-icons">
                <div className="join-event-splash">
                  <img src={highFive} alt="high-five" className="high-five-splash"/>
                    <a href='/feed'> <h4>Join an Event</h4> </a>
                      <p>Meet other people while doing what you love.</p>
                </div>
                <div className="join-event-splash">
                  <img src={ticket} alt="high-five" className="high-five-splash-2"/>
                  <a href='/feed'> <h4>Find an Event</h4> </a>
                      <p>Events are happening everyday. From gaming events and sports to boating and study groups.</p>
                </div>
                <div className="join-event-splash">
                  <img src={ticket} alt="high-five" className="high-five-splash"/>
                    <a href='/new/events'>  <h4>Start an Event</h4>   </a>
                      <p>Post your event and we'll find the people for you.</p>
                </div>
              </div>
          </div>
            <div className="splash-sign-up">
                <button className="splash-about-us-btn" onClick={takeToSignUp}>Join Connectd</button>
          </div>
        </div>
    </>
  )
}

export default Splash
