import React, { useCallback, useState } from 'react';
import SearchForm from '../components/SearchForm';
import { searchBusinesses } from '../apis/yelpAPI';
import BusinessList from '../components/BusinessList';

const Home = () => {
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = useCallback(async (searchParams) => {
    try {
      const results = await searchBusinesses(searchParams.location, searchParams.term);
      setBusinesses(results);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <SearchForm onSearch={handleSearch} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default Home;
