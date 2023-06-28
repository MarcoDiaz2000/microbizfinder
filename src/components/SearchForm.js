import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const SearchForm = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/services/${term}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label htmlFor="what">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Ex: food, drink, shopping, etc."
          id="what"
          className="search-input"
        />
      </label>

      <button type="submit" className="search-button">
        <FiSearch size={20} color="white" />
        <span>Search</span>
      </button>
    </form>
  );
};

export default SearchForm;
