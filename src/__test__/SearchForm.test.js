import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

describe('SearchForm', () => {
  it('calls onSearch with the correct term and location when submitted', () => {
    // Mock function for onSearch
    const onSearchMock = jest.fn();

    render(<SearchForm onSearch={onSearchMock} />);

    // Simulate user input
    const termInput = screen.getByLabelText('What:');
    const locationInput = screen.getByLabelText('Where:');
    const submitButton = screen.getByText('Search');

    fireEvent.change(termInput, { target: { value: 'food' } });
    fireEvent.change(locationInput, { target: { value: 'Mexico City' } });

    fireEvent.click(submitButton);

    // Expect onSearch to be called with the correct values
    expect(onSearchMock).toHaveBeenCalledWith({ term: 'food', location: 'Mexico City' });
  });
});
