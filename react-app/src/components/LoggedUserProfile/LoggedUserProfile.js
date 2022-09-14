import React, {useEffect, useState} from 'react';
import {NavLink, useParams,useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userProfile } from '../../store/user';

function LoggedUserProfile() {
  const sessionUser = useSelector(state => state.session);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile(sessionUser.id));
  }, [dispatch, sessionUser.user]);



  return (
    <>
    <div className="user-profile-container">
      <div className="user-profile">
        <div className="user-profile-image">
          <img src={sessionUser.user_image} alt="profile image" />
        </div>
        <div className="user-profile-info">
          <div className="user-profile-name">
            <h1>{sessionUser.username}</h1>
          </div>
          <div className="user-profile-bio">
            <p>{sessionUser.user_bio}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoggedUserProfile
