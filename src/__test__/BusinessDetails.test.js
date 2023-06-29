import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import BusinessDetails from '../components/BusinessDetails';

const mockStore = configureStore([thunk]);

test('BusinessDetails matches snapshot', () => {
  const store = mockStore({
    businessDetails: {
      isFetching: false,
      details: {
        id: '1',
        name: 'Business 1',
        image_url: 'example.com/business1.jpg',
        rating: 4.5,
        review_count: 10,
        phone: '123-456-7890',
        location: {
          address1: '123 Main St',
          city: 'City',
          zip_code: '12345',
        },
      },
      error: null,
    },
  });

  const { container } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<BusinessDetails />} />
        </Routes>
      </MemoryRouter>
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});
