import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

import './signUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);
  const [user_image, setUserImage] = useState(null);
  const [first_name, setFirstName] = useState(null);
  const [last_name, setLastName] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zipcode, setZipcode] = useState(null);
  const [user_bio, setUserBio] = useState(null);

  const user = useSelector(state => state.session);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, user_image, first_name, last_name, city, state, zipcode, user_bio));
      if (data) {
        setErrors(data)
      }
    }

  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateUserImage = (e) => {
    setUserImage(e.target.value);
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateState = (e) => {
    setState(e.target.value);
  };

  const updateZipcode = (e) => {
    setZipcode(e.target.value);
  };

  const updateUserBio = (e) => {
    setUserBio(e.target.value);
  };



  if (user.user !== null) {
    return <Redirect to='/feed' />;
  }

  return (
    <div className='login-form-container'>
    <form className="signUp-form" onSubmit={onSignUp}>
    <div>
      {errors.map((error, ind) => (
        <div key={ind}>{error}</div>
      ))}
    </div>
    <div className="login-form-input">
      <label>User Name</label>
      <input
        type='text'
        name='username'
        onChange={updateUsername}
        value={username}
      ></input>
    </div>
    <div className="login-form-input">
      <label>Email</label>
      <input
        type='text'
        name='email'
        onChange={updateEmail}
        value={email}
      ></input>
    </div>
    <div className="login-form-input">
      <label>Password</label>
      <input
        type='password'
        name='password'
        onChange={updatePassword}
        value={password}
      ></input>
    </div>
    <div className="login-form-input">
      <label>Repeat Password</label>
      <input
        type='password'
        name='repeat_password'
        onChange={updateRepeatPassword}
        value={repeatPassword}
        required={true}
      ></input>
    </div>
    <div className="login-form-input">
      <label>First Name</label>
      <input
        type='text'
        name='first_name'
        onChange={updateFirstName}
        value={first_name}
        required={true}
      ></input>
    </div>
    <div className="login-form-input">
      <label>Last Name</label>
      <input
        type='text'
        name='last_name'
        onChange={updateLastName}
        value={last_name}
        required={true}
      ></input>
    </div>
    <div className="login-form-input">
      <label>City</label>
      <input
        type='text'
        name='city'
        onChange={updateCity}
        value={city}
        required={true}
      ></input>
    </div>
    <div className="login-form-input">
      <label>State</label>
      <input
        type='text'
        name='state'
        onChange={updateState}
        value={state}
        required={true}
      ></input>
    </div>
    <div className="login-form-input">
      <label>Zip Code</label>
      <input
        type='text'
        name='zipcode'
        onChange={updateZipcode}
        value={zipcode}
        required={true}
      ></input>
    </div>
    <div className="login-form-input">
      <label>Profile Image</label>
      <input
        type='text'
        name='user_image'
        onChange={updateUserImage}
        value={user_image}
        required={true}
      ></input>
    </div>
    <div className="login-form-input">
      <label>User Bio</label>
      <input
        type='text'
        name='user_bio'
        onChange={updateUserBio}
        value={user_bio}
        required={true}
      ></input>
    </div>
    <button type='submit'>Sign Up</button>
  </form>
  </div>
  );
};

export default SignUpForm;
