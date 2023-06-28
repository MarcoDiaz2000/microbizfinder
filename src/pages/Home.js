import React from 'react';
import SearchForm from '../components/SearchForm';
import ServiceModule from '../components/ServiceModule';
import logo from '../images/logo.svg';

const Home = () => (
  <div>
    <div className="home-banner">
      <img src={logo} alt="Logo" className="home-logo" />
      <h1 className="home-title">Discover & Explore Montreal</h1>
      <p className="home-subtitle">Discover the best places to eat, drink and shop in Montreal.</p>
      <SearchForm />
    </div>
    <h2 className="section-title">What Do You Want To Do Today?</h2>
    <ServiceModule />
  </div>
);

export default Home;
