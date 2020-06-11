const axios = require('axios');

const instanceAxios = () => axios.create({
  baseURL: 'https://apis.datos.gob.ar/georef/api/',
  headers: {
    'accept': 'aplication/json'
  }
})

const getLatitudeAndLongitudeByCity = async (direction) => {

  const encodedURL = encodeURI(direction);
  const clientAxios = instanceAxios();
  const results = await clientAxios.get(`provincias?nombre=${encodedURL}&aplanar`);
  const response = results.data;

  if (response.cantidad === 0) {
    throw new Error(`No existen resultados para: ${direction}`);
  }

  return response.provincias[0];
}

module.exports = {
  getLatitudeAndLongitudeByCity
}
