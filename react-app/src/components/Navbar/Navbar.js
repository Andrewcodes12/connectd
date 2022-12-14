import './navbar.css';

import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import { logout } from '../../store/session';

import LogoutButton from '../auth/LogoutButton';
import SearchBar from '../Searchbar/SearchBar';
import AddEvent from '../AddEvent/AddEvent';


const NavBar = () => {
  const sessionUser = useSelector(state => state.session);

  const history = useHistory();
  const dispatch = useDispatch();


  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);


  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  const isUserLoggedIn = () => {
    if (sessionUser.user === null) {
      setIsLogged(false);
      setMenuOpen(!menuOpen);
    } else {
      setIsLogged(true);
      setMenuOpen(!menuOpen);
    }
  }

  const handleLogout = async () => {
    setIsLogged(false);
    setMenuOpen(!menuOpen);
    await dispatch(logout());
    history.push('/');
  }




  return (
    <>
    <div className="navBar">

      <div className="logo">
        <div>
          <NavLink to='/feed'>
            Connectd
          </NavLink>
        </div>
      </div>
      <div className="navSearch">
        <i className="fas fa-search"></i>
          <SearchBar />
      </div>
      <div className="rightNav">
        <NavLink to='/feed' className="home-nav" activeClassName='active'>
          <i className="fas fa-home"  ></i>
        </NavLink>
        <NavLink to='/about' className="about-nav" activeClassName='active'>
        <i class="fa-solid fa-question"></i>
        </NavLink>
        <div className="upload-nav">
          <AddEvent />
        </div>
        {/* <NavLink to='/profile' >
          <i className="far fa-user-circle" id="profile" ></i>
        </NavLink> */}
        <div className="profile">
            <i className="far fa-user-circle" id="profile" onClick={() => isUserLoggedIn()}></i>

            {menuOpen &&
              <div className="user-menu-items">
                {isLogged ?
                <>
                  <li><NavLink to={`/users/${sessionUser.id}/profile`} style={{ textDecoration: 'none', color: 'black' }} onClick={handleMenuOpen} >My Profile</NavLink></li >
                  <li onClick={handleLogout}>Log Out</li>
                </>
                :
                  <>
                  <li><NavLink to='/login' style={{ textDecoration: 'none', color: 'black' }} onClick={handleMenuOpen}>Login</NavLink></li>
                  <li><NavLink to='/sign-up' style={{ textDecoration: 'none', color: 'black' }} onClick={handleMenuOpen}>Sign Up</NavLink></li>
                  </>

                }
              </div>
            }
        </div>


            {/* <NavLink to='/logout'>
              <LogoutButton />
            </NavLink> */}
      </div>
    </div>
    </>
  );
}



export default NavBar;
