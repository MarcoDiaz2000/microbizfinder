import React, { useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchBusinesses } from '../redux/business/yelpAPI';
import BusinessList from '../components/BusinessList';

const Services = () => {
  const [businesses, setBusinesses] = useState([]);
  const { id } = useParams();

  const handleSearch = useCallback(async () => {
    try {
      const results = await searchBusinesses('Montreal', id);
      setBusinesses(results);
    } catch (error) {
      // console.error(error);
    }
  }, [id]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

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
