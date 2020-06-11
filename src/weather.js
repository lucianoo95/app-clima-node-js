const axios = require('axios');

const getWeatherByCity = async (latitude, longitude) => {

  const apiKey = '5b006d66271f23e2836e1051b121c6d8',
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  const response = await axios.get(url);

  return response.data.main.temp;
}

module.exports = {
  getWeatherByCity
}
