import react from 'react';
import fetch from 'isomorphic-fetch';

// Move later to a config file
const config = {
  API_URL: '//api.github.com'
};

export default function callApi(endpoint, method = 'get', body) {
  console.warn('callApi:: ', endpoint);
  return fetch(`${config.API_URL}/${endpoint}`, {
    headers: { 'content-type': 'application/json' },
    method,
    body: JSON.stringify(body),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  })
  .then(
    response => response,
    error => error
  );
}
