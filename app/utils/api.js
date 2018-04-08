var axios = require('axios');



function get5DayWeather (city) {
console.log('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=b2b86302025a3c01df461815989874c6');

	return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&type=accurate&APPID=b2b86302025a3c01df461815989874c6')
	.then(function (weatherDetails) {
		return {
			weather: weatherDetails.weather,
			main: weatherDetails.main,
			visibility: weatherDetails.visibility,
			wind: weatherDetails.wind,
			rain: weatherDetails.rain,
			clouds: weatherDetails.clouds,
			snow: weatherDetails.snow,
			sys: weatherDetails.sys,
			cityid: weatherDetails.id,
			dt: weatherDetails.dt,
			name: weatherDetails.name,
			cod: weatherDetails.cod
		}
	});
}

module.exports = {
	get5DayWeather,
}