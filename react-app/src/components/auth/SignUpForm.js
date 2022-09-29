import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';


import { signUp } from '../../store/session';
import { login } from '../../store/session';

import './signUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);
  const [user_image, setImage] = useState(null);
  const [first_name, setFirstName] = useState(null);
  const [last_name, setLastName] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zipcode, setZipcode] = useState(null);
  const [user_bio, setUserBio] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const user = useSelector(state => state.session);

  const dispatch = useDispatch();
  const history = useHistory();

  // const onSignUp = async (e) => {
  //   e.preventDefault();
  //   if (errors.length === 0) {
  //     const data = await dispatch(signUp(username, email, password, user_image, first_name, last_name, city, state, zipcode, user_bio));
  //     if (data) {
  //       setErrors(data)
  //     }
  //   }

  // };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("user_image", user_image);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zipcode", zipcode);
    formData.append("user_bio", user_bio);




    setImageLoading(true);
    const res = await fetch('/api/auth/signup', {
        method: "POST",
        body: formData,
    });
    if (res.ok) {
        await res.json();
        setImageLoading(false);
        dispatch(login(email, password))
        history.push("/feed");
    }
    else {
        setImageLoading(false);
        console.log("error")
    }


}


  const updateImage = (e) => {
      const file = e.target.files[0];
      setImage(file);
  }

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

  // const updateUserImage = (e) => {
  //   setUserImage(e.target.value);
  // };

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


  function emailErrorHandling(){
    if(email.length < 5){
      setErrors(["Email must be at least 5 characters"])
    } else if(!email.includes("@")){
      setErrors(["Email must include @"])
    } else if(!email.includes(".")){
      setErrors(["Email must include ."])
    } else {
      setErrors([])
    }

  }

  function passwordErrorHandling(){
    if(password.length < 6){
      setErrors(["Password must be at least 6 characters"])
    } else if(password === username){
      setErrors(["Password cannot be the same as username"])
    } else if(password === email){
      setErrors(["Password cannot be the same as email"])
    } else {
      setErrors([])
    }
  }

  function usernameErrorHandling(){
    if(username.length < 4){
      setErrors(["Username must be at least 4 characters"])
    } else if(username === email){
      setErrors(["Username cannot be the same as email"])
    } else {
      setErrors([])
    }
  }

  function repeatPasswordErrorHandling(){
    if(repeatPassword !== password){
      setErrors(["Passwords must match"])
    } else {
      setErrors([])
    }
  }

  function firstNameErrorHandling(){
    if(first_name.length < 2){
      setErrors(["First name must be at least 2 characters"])
    } else {
      setErrors([])
    }
  }

  function lastNameErrorHandling(){
    if(last_name.length < 2){
      setErrors(["Last name must be at least 2 characters"])
    } else {
      setErrors([])
    }
  }

  function bioErrorHandling(){
    if(user_bio.length < 10){
      setErrors(["Bio must be at least 10 characters"])
    } else if(user_bio.length > 250){
      setErrors(["Bio cannot be more than 250 characters"])
    } else {
      setErrors([])
    }
  }




  return (
    <div className='signUp-form-container'>
    <form className="signUp-form" onSubmit={handleSignUpSubmit}>
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
        onBlur={() => usernameErrorHandling()}
        placeholder="Enter a username"
        value={username}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='text'
        name='email'
        onChange={updateEmail}
        onBlur={() => emailErrorHandling()}
        placeholder="Enter an email"
        value={email}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='password'
        name='password'
        onChange={updatePassword}
        onBlur={() => passwordErrorHandling()}
        placeholder="Enter a password"
        value={password}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='password'
        name='repeat_password'
        onChange={updateRepeatPassword}
        onBlur={() => repeatPasswordErrorHandling()}
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
        onBlur={() => firstNameErrorHandling()}
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
        onBlur={() => lastNameErrorHandling()}
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
    <label className="signUp-form-label" htmlFor="user_bio">Upload profile picture</label>
    <div className="signUp-form-input">
      <input
        type='file'
        name='user_image'
        accept='image/*'
        onChange={updateImage}
        placeholder="Enter a link to your profile image"
        required={true}
      ></input>
    </div>
    <div className="signUp-form-input">
      <input
        type='text'
        name='user_bio'
        onChange={updateUserBio}
        onBlur={() => bioErrorHandling()}
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
