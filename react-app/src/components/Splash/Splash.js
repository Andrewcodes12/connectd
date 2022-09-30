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
import group from '../public/group-splash.png'

import SearchBar from '../Searchbar/SearchBar'

import './splash.css'

import {FaGamepad, FaChess, FaSchool, FaCity,FaUmbrellaBeach } from 'react-icons/fa'
import {MdSportsFootball, MdDirectionsBoatFilled, MdLocationCity} from 'react-icons/md'
import {GiWineBottle, GiArchBridge, GiModernCity} from 'react-icons/gi'



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

  const takeToLogin = async (e) => {
    e.preventDefault()
    history.push(`/login`)
  }

  const takeToAbout = async (e) => {
    e.preventDefault()
    history.push(`/about`)
  }

  const takeToSignUp = async (e) => {
    e.preventDefault()
    history.push(`/sign-up`)
  }


  return (
    <>
    <div className="background-img">
      <div className="splash-container">
          <div className="splash-nav">
              <div className="splash-logo">
                  <span>Connectd</span>
              </div>

            <div className="splash-left-container">
              <h3>Search for Events in your city</h3>
                <div className="splash-search-bar">
                  <SearchBar />
                </div>
              </div>

              <div className="splash-nav-links">
                  <div className='splash-login'>
                    <button onClick={takeToLogin}>
                      Login
                    </button>
                  </div>
                  <div className='splash-login'>
                    <button onClick={takeToAbout}>
                      About
                    </button>
                  </div>
                  <div className='splash-login'>
                    <button onClick={takeToSignUp}>
                      Sign Up
                    </button>
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
                      <MdSportsFootball className="categories-icon" />
                        <div className="category-splash-div">
                          Sports
                        </div>
                      </button>
                      <button onClick={takeToClubbing}>
                      <GiWineBottle className="categories-icon" />
                        <div className="category-splash-div">
                          Clubbing
                        </div>
                      </button>
                      <button onClick={takeToStudygroup}>
                      <FaSchool className="categories-icon" />
                        <div className="category-splash-div">
                          Study Groups
                        </div>
                      </button>
                      <button onClick={takeToBoating}>
                      <MdDirectionsBoatFilled className="categories-icon" />
                        <div className="category-splash-div">
                          Boating
                        </div>
                      </button>
                      <button onClick={takeToVideoGames}>
                        <FaGamepad className="categories-icon" />
                        <div className="category-splash-div">
                         Video Games
                        </div>
                      </button>
                    </div>
                </div>
        </div>
        <div className="splash-search-container">
                <h4>Check out Events happening in these cities</h4>
                <div className="splash-search-cities-btns">
                    <button onClick={findMiami}>
                      <FaUmbrellaBeach className="categories-icon" />
                      <div className="splash-search-city">
                        Miami
                      </div>
                    </button>
                    <button onClick={findNewYork}>
                      <MdLocationCity className="categories-icon" />
                      <div className="splash-search-city">
                        New York
                      </div>
                    </button>
                    <button onClick={findSanFran}>
                      <GiArchBridge className="categories-icon" />
                      <div className="splash-search-city">
                        San Francisco
                      </div>
                    </button>
                    <button onClick={findAtlanta}>
                      <FaCity className="categories-icon" />
                      <div className="splash-search-city">
                        Atlanta
                        </div>
                    </button>
                    <button onClick={findChicago}>
                      <GiModernCity className="categories-icon" />
                      <div className="splash-search-city">
                        Chicago
                        </div>
                    </button>
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
                  <img src={group} alt="high-five" className="high-five-splash"/>
                    <a href='/feed'>  <h4>Start an Event</h4>   </a>
                      <p>Post your event and we'll find the people for you.</p>
                </div>
              </div>
          </div>
            <div className="splash-sign-up">
                <button className="splash-about-us-btn" onClick={takeToSignUp}>Join Connectd</button>
          </div>
        </div>
        </div>
    </>
  )
}

export default Splash
