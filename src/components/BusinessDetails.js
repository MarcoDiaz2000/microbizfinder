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
    <div className="detail-container">
      <img className="detail-image" src={details.image_url} alt={details.name} />
      <div className="detail-header">
        <h1>{details.name}</h1>
      </div>
      <div className="detail-body">
        <p className="detail-item">
          <strong>Phone:</strong>
          {' '}
          {details.phone}
        </p>
        <p className="detail-item">
          <strong>Address:</strong>
          {' '}
          {details.location.address1}
          ,
          {' '}
          {details.location.city}
          ,
          {' '}
          {details.location.zip_code}
        </p>
        <p className="detail-item">
          <strong>Rating:</strong>
          {' '}
          {details.rating}
        </p>
        <p className="detail-item">
          <strong>Reviews:</strong>
          {' '}
          {details.review_count}
        </p>
      </div>
    </div>
  );
};

export default BusinessDetails;
