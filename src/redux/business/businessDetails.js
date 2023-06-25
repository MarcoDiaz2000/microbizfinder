import { getBusinessDetails as fetchDetailsFromAPI } from '../apis/yelpAPI';

// Action types
export const SET_BUSINESS_DETAILS = 'SET_BUSINESS_DETAILS';

// Action creators
export const setBusinessDetails = (businessDetails) => ({
  type: SET_BUSINESS_DETAILS,
  payload: businessDetails,
});

// Reducer
const initialState = null;

export const businessDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BUSINESS_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

// Thunk
export const fetchBusinessDetails = (businessId) => async (dispatch) => {
  try {
    const details = await fetchDetailsFromAPI(businessId);
    dispatch(setBusinessDetails(details));
  } catch (error) {
    console.error(error);
  }
};
