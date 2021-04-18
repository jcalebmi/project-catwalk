const frisby = require('frisby');

const { Joi } = frisby;
const apiToken = require('./myconfig.js');

frisby.globalSetup({
  request: {
    headers: {
      authorization: apiToken,
    },
  },
});

describe('project-catwalk api', () => {
  it('GET /products should return the 200 status code', () => (
    frisby
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products')
      .expect('status', 200)
  ));

  it('GET /products should return an array of objects', () => (
    frisby
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products')
      .expect('status', 200)
      .expect('jsonTypes', '*', {
        id: Joi.number(),
        campus: Joi.string(),
        name: Joi.string(),
      })
  ));
});

describe('project-catwalk reviews api', () => {
  it('GET /reviews should return the 200 status code', () => (
    frisby
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=19089')
      .expect('status', 200)
  ));

  it('GET /reviews should return an array of objects', () => (
    frisby
      .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=19089')
      .expect('status', 200)
      .expect('jsonTypes', {
        review_id: Joi.number(),
        rating: Joi.number(),
        name: Joi.string(),
      })
  ));
});


//Need to make a test review to stop udating
//helpfulness on reload

// describe('project-catwalk helpfulness api', () => {
//   it('PUT /helpfulness should return the 204 status code', () => (
//     frisby
//       .put('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/228391/helpful')
//       .expect('status', 204)
//   ));
// });
