import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('SearchForm', () => {
  it('navigates to the correct path on form submission', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByPlaceholderText, getByText, asFragment } = render(<SearchForm />);

    const input = getByPlaceholderText('Ex: food, drink, shopping, etc.');
    const submitButton = getByText('Search');

    const searchTerm = 'food';
    fireEvent.change(input, { target: { value: searchTerm } });
    fireEvent.click(submitButton);

    expect(navigate).toHaveBeenCalledWith('/services/food');
    expect(asFragment()).toMatchSnapshot();
  });
});
