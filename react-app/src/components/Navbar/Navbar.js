import './navbar.css';

import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogoutButton from '../auth/LogoutButton';
import SearchBar from '../Searchbar/SearchBar';


const NavBar = () => {
  const sessionUser = useSelector(state => state.session);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  const isUserLoggedIn = () => {
    if (sessionUser) {
      setIsLogged(true);
    }
  }


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
        <NavLink to='/new/events'>
          <i className="fas fa-upload" id="upload"></i>
        </NavLink>
        {/* <NavLink to='/profile' >
          <i className="far fa-user-circle" id="profile" ></i>
        </NavLink> */}
        <div className="profile">
            <i className="far fa-user-circle" id="profile" onClick={handleMenuOpen}></i>

            {menuOpen &&
              <div className="user-menu-items">
                {isLogged  ?
                <>
                  <li><NavLink to='/login' style={{ textDecoration: 'none', color: 'black' }} onClick={handleMenuOpen}>Login</NavLink></li>
                  <li><NavLink to='/sign-up' style={{ textDecoration: 'none', color: 'black' }} onClick={handleMenuOpen}>Sign Up</NavLink></li>
                </>
                :
                <>
                  <li><NavLink to={`/users/${sessionUser.id}/profile`} style={{ textDecoration: 'none', color: 'black' }} onClick={handleMenuOpen}>My Profile</NavLink></li>
                  <li><LogoutButton /></li>
                </>
                }
              </div>
            }
        </div>





            <NavLink to='/logout'>
              <LogoutButton />
            </NavLink>
      </div>
    </div>
    </>
  );
}



export default NavBar;
