import React from 'react'

import friends from '../public/friends-splash-page.png'
import waving from '../public/happy-friends.jpeg'
import study from '../public/study-group.jpeg'
import newPeople from '../public/meet-new-ppl.jpeg'

import './splash.css'

function Splash() {
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
                  <div className='splash-signup'>
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
                <div className="splash-content-img">
                    <img src={friends} alt="splash-img" className='splash-img'/>
                </div>
              </div>
            <div className="splash-connect-with-people">
                <div className="splash-new-friends">
                    <a href="/feed"><img src={waving} alt="happy-img" className="waving-img-splash"/>
                      <div className="waving-img-splash-div">
                        Start New Hobbies
                      </div>
                    </a>
                </div>
                <div className="splash-study-group">
                    <a href="/events/search/StudyGroups"><img src={study} alt="study-group" className="study-group-splash"/>
                      <div className="study-group-splash-div">
                        Find A Study Group
                      </div>
                    </a>
                </div>
                <div className="splash-meet-new-people">
                    <a href="/feed"><img src={newPeople} alt="meet-new-people" className="meet-new-people-splash"/>
                      <div className="meet-new-people-splash-div">
                        Meet New People
                      </div>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Splash
