import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BusinessList from '../components/BusinessList';

describe('BusinessList', () => {
  it('renders the list of businesses correctly', () => {
    const businesses = [
      {
        id: '1',
        name: 'Business 1',
        image_url: 'image1.jpg',
        rating: 4.5,
        review_count: 10,
        categories: [
          { title: 'Category 1' },
          { title: 'Category 2' },
        ],
      },
    ];

    const { container } = render(
      <Router>
        <BusinessList businesses={businesses} />
      </Router>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders null when no businesses are provided', () => {
    const { container } = render(
      <Router>
        <BusinessList businesses={null} />
      </Router>,
    );

    expect(container).toMatchSnapshot();
  });
});
