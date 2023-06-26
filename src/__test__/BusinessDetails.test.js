import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // debes instalar esta biblioteca
import BusinessDetails from '../components/BusinessDetails';

const mockStore = configureStore([]);

describe('BusinessDetails', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      businessDetails: {
        isFetching: false,
        details: {
          name: 'Test Business',
          phone: '+11234567890',
          location: {
            address1: '123 Test St',
            city: 'Test City',
            zip_code: '12345',
          },
          image_url: 'test.jpg',
          rating: 4.5,
          review_count: 100,
        },
        error: null,
      },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <BusinessDetails />
      </Provider>,
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
