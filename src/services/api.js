const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getApi = () => fetch(url)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);

export default getApi;
