import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaHotel, FaUtensils, FaBeer, FaShoppingBag, FaBus, FaLandmark,
  FaTree, FaFilm, FaMusic, FaFootballBall, FaSubway, FaHeartbeat,
} from 'react-icons/fa';

const services = [
  { name: 'hotels', icon: <FaHotel /> },
  { name: 'restaurants', icon: <FaUtensils /> },
  { name: 'bars', icon: <FaBeer /> },
  { name: 'shops', icon: <FaShoppingBag /> },
  { name: 'tours', icon: <FaBus /> },
  { name: 'museums', icon: <FaLandmark /> },
  { name: 'parks', icon: <FaTree /> },
  { name: 'cinemas', icon: <FaFilm /> },
  { name: 'music', icon: <FaMusic /> },
  { name: 'sports', icon: <FaFootballBall /> },
  { name: 'transport', icon: <FaSubway /> },
  { name: 'health', icon: <FaHeartbeat /> },
];

const ServiceModule = () => {
  const navigate = useNavigate();

  return (
    <div className="service-module">
      {services.map((service) => (
        <button
          type="button"
          key={service.name}
          className="service-button"
          style={{ backgroundImage: `url(/images/${service.name}.jpg)` }}
          onClick={() => navigate(`/services/${service.name}`)}
        >
          <div className="service-content">
            {service.icon}
            <h2>{service.name.charAt(0).toUpperCase() + service.name.slice(1)}</h2>
            <p>Montreal, QC, Canada</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ServiceModule;
