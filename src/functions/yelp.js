const axios = require('axios');

const API_KEY = 'x3d8TIeRs6qtNZ_ZodU6PgC5tmNIq67bRDcrV79LGcsqleO5w_4S-mSDegabgGdsEeBZH9tY98qFv9_SaF1p8f0H_c7So1nTBVruKXhha7USGxhMI4KbyxOCaCyYZHYx';

const handler = async function (event) {
  const endpoint = 'https://api.yelp.com/v3/businesses/search';
  const { location } = event.queryStringParameters;
  const { term } = event.queryStringParameters;

  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        location,
        term,
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify(response.data.businesses),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error accessing Yelp API' }),
    };
  }
};

module.exports = { handler };
