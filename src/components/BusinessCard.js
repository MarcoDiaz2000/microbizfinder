import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BusinessCard = ({ business }) => (
  <div
    className="business-card"
    data-testid="business-card"
    style={{ backgroundImage: `url(${business.image_url})` }}
  >
    <h2>{business.name}</h2>
    <p>{business.categories.map((category) => category.title).join(', ')}</p>
    <p>{`Rating: ${business.rating} / 5`}</p>
    <Link to={`/details/${business.id}`}>See details</Link>
  </div>
);

BusinessCard.propTypes = {
  business: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image_url: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
    })),
    location: PropTypes.shape({
      address1: PropTypes.string,
      city: PropTypes.string,
    }),
    rating: PropTypes.number,
  }).isRequired,
};

export default BusinessCard;
