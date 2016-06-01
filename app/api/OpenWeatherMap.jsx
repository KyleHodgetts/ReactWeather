import axios from 'axios';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const APP_ID = 'appid=ea347f6949c881958c653e98a2431d12';
const UNITS = '&units=metric';
const URL = `${BASE_URL}${APP_ID}${UNITS}`;

module.exports = {
  getTemp: function (location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${URL}&q=${encodedLocation}`;

    // Returns a promise
    return axios.get(requestUrl).then(function (response) {
      // Catch errors
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      }
      else {
        return response.data.main.temp
      }
    }, function (response) {
      throw new Error(response.data.message);
    });
  }
}
