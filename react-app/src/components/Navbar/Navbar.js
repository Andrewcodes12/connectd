import './navbar.css';

import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import LogoutButton from '../auth/LogoutButton';
import SearchBar from '../Searchbar/SearchBar';

const NavBar = () => {

  // create modal for profile button with menu options for login, profile page, sign up, and my events

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const close = () => setModal(false);






  return (
    <>
    <div className="navBar">

      <div className="logo">
        <div>
          <NavLink to='/'>
            Connectd
          </NavLink>
        </div>
      </div>
      <div className="navSearch">
        <i className="fas fa-search"></i>
          <SearchBar />
      </div>
      <div className="rightNav">
        <NavLink to='/'>
          <i className="fas fa-home" id="home"></i>
        </NavLink>
        <NavLink to='/post/new/'>
          <i className="fas fa-upload" id="upload"></i>
        </NavLink>
        {/* <NavLink to='/profile' >
          <i className="far fa-user-circle" id="profile" ></i>
        </NavLink> */}
        <div className="profile" onClick={toggle}>
          <i className="far fa-user-circle" id="profile" ></i>
        </div>
        <div className="modal" style={{display: modal ? 'block' : 'none'}}>
          <div className="modal-content">
            <div className="modal-header">
              <span className="close" onClick={close}>&times;</span>
              <h2>Login</h2>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={close}>Close</button>
            </div>
          </div>
        </div>

            {/* <NavLink to='/logout'>
              <LogoutButton />
            </NavLink> */}
      </div>
    </div>
    </>
  );
}

 {/* <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul> */}
    // </nav>

export default NavBar;
