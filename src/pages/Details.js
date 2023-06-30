import React from 'react';
import { useParams } from 'react-router-dom';
import BusinessDetails from '../components/BusinessDetails';

const Details = () => {
  const params = useParams();

  return (
    <div>
      <BusinessDetails match={params} />
    </div>
  );
};

export default Details;
