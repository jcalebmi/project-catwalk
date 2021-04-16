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