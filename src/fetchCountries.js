const BASE_URL = 'https://restcountries.eu/rest/v2/name';

export default (searchQuery) => {
  return fetch(`${BASE_URL}/${searchQuery}`)
  .then(Response => Response.json())
  .catch(err => console.warn('error: ', err));
};