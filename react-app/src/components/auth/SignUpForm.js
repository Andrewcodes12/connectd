import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';


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
  const history = useHistory();

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


  const updateZip = async  (e) =>  {

    const zip = e.target.value
    setZipcode(zip)

    if(zip.length === 5){
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`)
    const data = await res.json()

    if(Object.keys(data).length === 0){
      setErrors(["Invalid Zipcode"])
      setZipcode("")
    } else {
    const city = data.places[0]['place name']
    const state = data.places[0]["state abbreviation"]

    setState(state)
    setCity(city)
    setErrors([])
    }


    } else if(zip.length === 0){
      setState("")
      setCity("")
    } else {
      setState("")
      setCity("")
      setErrors(["Zipcode must be at least 5 digits"])
    }

  }

  function goToLoginPage(){
    history.push('/login')
  }


  return (
    <div className='signUp-form-container'>
    <form className="signUp-form" onSubmit={onSignUp}>
    <div>
      {errors.map((error, ind) => (
        <div key={ind} className="form-errors">{error}</div>
      ))}
    </div>
    <div className="signUp-form-input">
      <input
        type='text'
        name='username'
        onChange={updateUsername}
        placeholder="Enter a username"
        value={username}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='text'
        name='email'
        onChange={updateEmail}
        placeholder="Enter an email"
        value={email}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='password'
        name='password'
        onChange={updatePassword}
        placeholder="Enter a password"
        value={password}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='password'
        name='repeat_password'
        onChange={updateRepeatPassword}
        placeholder="Confirm password"
        value={repeatPassword}
        required={true}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='text'
        name='first_name'
        onChange={updateFirstName}
        placeholder="Enter your first name"
        value={first_name}
        required={true}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='text'
        name='last_name'
        onChange={updateLastName}
        placeholder="Enter your last name"
        value={last_name}
        required={true}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='text'
        name='zipcode'
        onChange={updateZip}
        placeholder="Enter your zipcode"
        value={zipcode}
        required={true}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='text'
        name='city'
        value={city}
        placeholder="City is Automatically Filled based on Zipcode"
        required={true}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='text'
        name='state'
        value={state}
        placeholder="State is Automatically Filled based on Zipcode"
        required={true}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='text'
        name='user_image'
        onChange={updateUserImage}
        placeholder="Enter a link to your profile image"
        value={user_image}
        required={true}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='text'
        name='user_bio'
        onChange={updateUserBio}
        placeholder="Enter a short bio"
        value={user_bio}
        required={true}
      ></input>
    </div>
    <div className="signUp-buttons">
      <button type='submit'>Sign Up</button>
      <button className='demo-login' onClick={goToLoginPage}>Login Page</button>
    </div>
  </form>
  </div>
  );
};

export default SignUpForm;
