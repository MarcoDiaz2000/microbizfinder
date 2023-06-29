import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BusinessCard from '../components/BusinessCard';

test('BusinessCard matches snapshot', () => {
  const business = {
    id: '1',
    name: 'Example Business',
    image_url: 'example.com/image.jpg',
    categories: [{ title: 'Category 1' }, { title: 'Category 2' }],
    location: { address1: '123 Main St', city: 'Example City' },
    rating: 4.5,
  };

  const { container } = render(
    <MemoryRouter>
      <BusinessCard business={business} />
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});
