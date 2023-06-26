import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BusinessCard from '../components/BusinessCard';

const mockBusiness = {
  id: '1',
  name: 'Test Business',
  image_url: 'test_image_url',
  categories: [{ title: 'Test Category' }],
  location: { address1: 'Test Address', city: 'Test City' },
  rating: 5,
};

describe('BusinessCard', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <MemoryRouter>
        <BusinessCard business={mockBusiness} />
      </MemoryRouter>,
    );
  });

  it('renders without crashing', () => {
    expect(screen.getByTestId('business-card')).toBeInTheDocument();
  });

  it('displays business details correctly', () => {
    expect(screen.getByText('Test Business')).toBeInTheDocument();
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByText('Test Address, Test City')).toBeInTheDocument();
    expect(screen.getByText('Rating: 5 / 5')).toBeInTheDocument();
  });

  it('has correct link to business details', () => {
    expect(screen.getByText('See details')).toHaveAttribute('href', '/details/1');
  });

  it('matches snapshot', () => {
    expect(renderedComponent.asFragment()).toMatchSnapshot();
  });
});
