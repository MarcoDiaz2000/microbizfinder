import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import logo from '../images/logo.svg';

const Header = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="navbar">
      <FaArrowLeft className="back-button" onClick={() => window.history.back()} />
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} className="logo" alt="logo" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
