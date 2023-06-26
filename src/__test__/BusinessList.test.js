import React from 'react';
import { render } from '@testing-library/react';
import BusinessList from '../components/BusinessList';
import BusinessCard from '../components/BusinessCard';

jest.mock('../components/BusinessCard', () => jest.fn(() => null));

const mockBusinesses = [
  {
    id: '1', name: 'Negocio 1', image_url: 'https://ejemplo.com/imagen1.jpg', rating: 4, review_count: 200,
  },
  {
    id: '2', name: 'Negocio 2', image_url: 'https://ejemplo.com/imagen2.jpg', rating: 3.5, review_count: 150,
  },
];

describe('BusinessList', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(<BusinessList businesses={mockBusinesses} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    expect(BusinessCard).toHaveBeenCalledTimes(mockBusinesses.length);
  });

  mockBusinesses.forEach((business) => {
    it(`passes correct props to BusinessCard for business with id ${business.id}`, () => {
      expect(BusinessCard).toHaveBeenCalledWith({ business }, {});
    });
  });

  it('matches snapshot', () => {
    expect(renderedComponent.asFragment()).toMatchSnapshot();
  });
});
