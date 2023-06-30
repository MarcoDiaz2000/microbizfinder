import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchBusinesses } from '../redux/business/yelpAPI';
import BusinessList from '../components/BusinessList';

const Services = () => {
  const [businesses, setBusinesses] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const handleSearch = useCallback(async () => {
    try {
      const results = await searchBusinesses('Montreal', id);
      setBusinesses(results);
      setError(null);
    } catch (error) {
      setError('There was an error searching for businesses. Please try again later.');
    }
  }, [id]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="services-title">
        <h1>{id.charAt(0).toUpperCase() + id.slice(1)}</h1>
      </div>
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default Services;
