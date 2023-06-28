import { getBusinessDetails } from '../../apis/yelpAPI';

export const REQUEST_BUSINESS_DETAILS = 'REQUEST_BUSINESS_DETAILS';
export const RECEIVE_BUSINESS_DETAILS = 'RECEIVE_BUSINESS_DETAILS';
export const ERROR_BUSINESS_DETAILS = 'ERROR_BUSINESS_DETAILS';

export const requestBusinessDetails = () => ({
  type: REQUEST_BUSINESS_DETAILS,
});

export const receiveBusinessDetails = (details) => ({
  type: RECEIVE_BUSINESS_DETAILS,
  payload: details,
});

export const errorBusinessDetails = (error) => ({
  type: ERROR_BUSINESS_DETAILS,
  payload: error,
});

const initialState = {
  isFetching: false,
  details: null,
  error: null,
};

export const businessDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BUSINESS_DETAILS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_BUSINESS_DETAILS:
      return {
        ...state,
        isFetching: false,
        details: action.payload,
      };
    case ERROR_BUSINESS_DETAILS:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const fetchBusinessDetails = (id) => async (dispatch) => {
  dispatch(requestBusinessDetails());

  try {
    const details = await getBusinessDetails(id);
    dispatch(receiveBusinessDetails(details));
  } catch (error) {
    dispatch(errorBusinessDetails(error));
  }
};
