import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';



import './loginForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);


  const user = useSelector(state => state.session);


  const dispatch = useDispatch();


  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors([]);
  //   return dispatch(sessionActions.login({ email, password }))
  //     .catch(async (res) => {
  //       const data = await res.json();
  //       if (data && data.errors) setErrors(data.errors);
  //     });
  // }

    if(!errors.length){
      return <Redirect to='/feed' />
    }

  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user.user !== null) {
    return <Redirect to='/feed' />;
  }


  const demoLogin = async () => {
    const demoEmail = 'asd@aol.com'
    const demoPassword = 'password'
    setEmail(demoEmail);
    setPassword(demoPassword);

    return dispatch(
        login('andrew@demo.com', 'password')
    );
  }


  return (
    <div className='login-form-container'>
    <form className='login-form' onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind} className="form-errors">{error}</div>
        ))}
      </div>
      <div className='login-form-input'>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Enter your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='login-form-input'>
        <label htmlFor='password'>Password</label>
        <input
          name='passWord'
          type='password'
          placeholder='Enter your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
        <button type='submit'>Login</button>
        <button className='demo-login' onClick={demoLogin}>Demo Login</button>

    </form>
  </div>
  );
};

export default LoginForm;
