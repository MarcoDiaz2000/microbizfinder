const axios = require('axios');

const { API_KEY } = process.env;

const getBusinessDetails = async (businessId) => {
  const url = `https://api.yelp.com/v3/businesses/${businessId}`;

  try {
    const result = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    return { statusCode: 200, body: JSON.stringify(result.data) };
  } catch (err) {
    return { statusCode: 422, body: String(err) };
  }
};

const searchBusinesses = async (location, term) => {
  const url = 'https://api.yelp.com/v3/businesses/search';

  try {
    const result = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      params: {
        location,
        term,
      },
    });
    return { statusCode: 200, body: JSON.stringify(result.data.businesses) };
  } catch (err) {
    return { statusCode: 422, body: String(err) };
  }
};

exports.handler = async (event) => {
  const path = event.path.replace(/\.netlify\/functions\/[^/]+/, '');
  const segments = path.split('/').filter((e) => e);

  let location; let
    term;
  if (event.queryStringParameters) {
    location = event.queryStringParameters.location;
    term = event.queryStringParameters.term;
  }

  switch (event.httpMethod) {
    case 'GET':
      if (segments.length === 1) {
        const businessId = segments[0];
        return getBusinessDetails(businessId);
      }
      return searchBusinesses(location, term);

    default:
      return { statusCode: 405, body: 'Method Not Allowed' };
  }
};
