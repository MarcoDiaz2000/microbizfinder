import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';

const Header = () => (
  <div className="navbar">
    <NavLink to="/">
      <img src={logo} className="logo" alt="logo" />
    </NavLink>
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/details" className="nav-link">Details</NavLink>
        </li>
        <li>
          <NavLink to="/results" className="nav-link">Results</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
