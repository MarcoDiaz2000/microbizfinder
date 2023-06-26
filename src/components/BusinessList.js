import React from 'react';
import PropTypes from 'prop-types';
import BusinessCard from './BusinessCard';

const BusinessList = ({ businesses }) => {
  if (!businesses) {
    return null;
  }

  return (
    <div>
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
};

BusinessList.propTypes = {
  businesses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image_url: PropTypes.string,
      rating: PropTypes.number,
      review_count: PropTypes.number,
    }),
  ).isRequired,
};

export default BusinessList;
