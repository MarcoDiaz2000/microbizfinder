import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

const searchBusinesses = async (location, term) => {
  try {
    const response = await axios.get('/.netlify/functions/yelp', {
      headers,
      params: {
        location,
        term,
      },
    });
    return response.data;
  } catch (error) {
    return [];
  }
};

const getBusinessDetails = async (id) => {
  try {
    const response = await axios.get(`/.netlify/functions/yelp/${id}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export { searchBusinesses, getBusinessDetails };
