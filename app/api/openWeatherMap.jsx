// Load axios
var axios = require('axios');

// API KEY = 6a8bac43c73bff42dce38ce2e7d0c3c6
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6a8bac43c73bff42dce38ce2e7d0c3c6&units=imperial';

// create function that is returned when someone requires the module
module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		// call axios to get the weather
		return axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function (res) {
			throw new Error(res.data.message);
		});
	}
}
