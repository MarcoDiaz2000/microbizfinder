import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch({ term, location });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="what">
        What:
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Ex: food, service, barber, etc."
          id="what"
        />
      </label>

      <label htmlFor="where">
        Where:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Ex: Mexico City, MX"
          id="where"
        />
      </label>

      <input type="submit" value="Search" />
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
