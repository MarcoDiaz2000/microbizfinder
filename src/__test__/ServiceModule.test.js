import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import ServiceModule from '../components/ServiceModule';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('ServiceModule', () => {
  it('navigates to the correct path on service button click', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    const { getByText, asFragment } = render(<ServiceModule />);

    const hotelsButton = getByText('Hotels');
    fireEvent.click(hotelsButton);
    expect(navigate).toHaveBeenCalledWith('/services/hotels');

    expect(asFragment()).toMatchSnapshot();
  });
});
