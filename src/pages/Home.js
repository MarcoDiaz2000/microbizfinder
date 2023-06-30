import React from 'react';
import SearchForm from '../components/SearchForm';
import ServiceModule from '../components/ServiceModule';

const Home = () => (
  <div>
    <div className="home-banner">
      <h1 className="home-title">Discover & Explore</h1>
      <p className="home-subtitle">Discover the best places to eat, drink and shop in Montreal.</p>
      <SearchForm />
    </div>
    <h2 className="section-title">What Do You Want To Do Today?</h2>
    <ServiceModule />
  </div>
);

export default Home;
