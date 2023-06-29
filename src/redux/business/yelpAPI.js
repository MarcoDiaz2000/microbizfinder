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

/* import axios from 'axios';

const API_KEY = 'x3d8TIeRs6qtNZ_ZodU6PgC5tmNIq67bRDcrV79LGcsqleO5w_4S
-mSDegabgGdsEeBZH9tY98qFv9_SaF1p8f0H_c7So1nTBVruKXhha7USGxhMI4KbyxOCaCyYZHYx';

const headers = {
  Authorization: `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
};

const searchBusinesses = async (location, term) => {
  try {
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', {
      headers,
      params: {
        location,
        term,
      },
    });
    return response.data.businesses;
  } catch (error) {
    return [];
  }
};

const getBusinessDetails = async (id) => {
  try {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    return null;
  }
};

export { searchBusinesses, getBusinessDetails };
 */
