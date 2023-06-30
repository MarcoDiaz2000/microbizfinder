import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaMicrophone, FaCog } from 'react-icons/fa';
import logo from '../images/logo-montreal-blanco.png';

const Header = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      {location.pathname !== '/' && <FaArrowLeft className="back-button" onClick={() => window.history.back()} />}
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} className="logo" alt="logo" />
        </NavLink>
      </div>
      <div className="right-icons">
        <FaCog />
        <FaMicrophone />
      </div>
    </div>
  );
};

export default Header;
