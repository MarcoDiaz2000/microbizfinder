import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinessDetails } from '../redux/business/businessDetails';

const BusinessDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { isFetching, details, error } = useSelector((state) => state.businessDetails);

  useEffect(() => {
    dispatch(fetchBusinessDetails(id));
  }, [dispatch, id]);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  if (!details) {
    return <div>No details available</div>;
  }

  return (
    <div>
      <h1>{details.name}</h1>
      {/* Aquí puedes renderizar el resto de los detalles del negocio */}
      {/* Por ejemplo: */}
      <p>{details.phone}</p>
      <p>{details.location.address1}</p>
      <p>{details.location.city}</p>
      <p>{details.location.zip_code}</p>
      <img src={details.image_url} alt={details.name} />
      <p>
        Rating:
        {details.rating}
      </p>
      <p>
        {details.review_count}
        {' '}
        reviews
      </p>
      {/* y más... */}
    </div>
  );
};

export default BusinessDetails;
