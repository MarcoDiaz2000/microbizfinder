import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
  });

  it('renders logo', () => {
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'logo.svg');
  });

  it('renders navigation links', () => {
    const homeLink = screen.getByText('Home');
    const detailsLink = screen.getByText('Details');
    const resultsLink = screen.getByText('Results');

    expect(homeLink).toBeInTheDocument();
    expect(detailsLink).toBeInTheDocument();
    expect(resultsLink).toBeInTheDocument();

    expect(homeLink).toHaveAttribute('href', '/');
    expect(detailsLink).toHaveAttribute('href', '/details');
    expect(resultsLink).toHaveAttribute('href', '/results');
  });
});
