import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getBusinessDetails } from '../apis/yelpAPI';

const BusinessDetails = () => {
  const { id } = useParams();
  const [businessDetails, setBusinessDetails] = useState(null);

  useEffect(() => {
    const fetchBusinessDetails = async () => {
      try {
        const details = await getBusinessDetails(id);
        setBusinessDetails(details);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBusinessDetails();
  }, [id]);

  if (!businessDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{businessDetails.name}</h1>
      {/* Aquí puedes renderizar el resto de los detalles del negocio */}
      {/* Por ejemplo: */}
      <p>{businessDetails.phone}</p>
      <p>{businessDetails.location.address1}</p>
      <p>{businessDetails.location.city}</p>
      <p>{businessDetails.location.zip_code}</p>
      <img src={businessDetails.image_url} alt={businessDetails.name} />
      <p>
        Rating:
        {businessDetails.rating}
      </p>
      <p>
        {businessDetails.review_count}
        {' '}
        reviews
      </p>
      {/* y más... */}
    </div>
  );
};

BusinessDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default BusinessDetails;
