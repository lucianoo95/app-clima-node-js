const { getLatitudeAndLongitudeByCity } = require('./src/place');
const { getWeatherByCity } = require('./src/weather');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

const getInfo = async (direction) => {

  try {
    const { nombre, centroide_lat, centroide_lon } = await getLatitudeAndLongitudeByCity(direction);
    const temp = await getWeatherByCity(centroide_lat, centroide_lon);
    return `El clima de ${nombre} es de: ${temp} °C (grados Celsius)`;
  } catch (error) {
    return `No se pudo determinar el clima de: ${direction}.`;
  }

}

getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log)