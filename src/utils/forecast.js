const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url =
		'http://api.weatherstack.com/current?access_key=11ee78d28e37ed4ebe73e33d97f771e0&query=' +
		latitude +
		',' +
		longitude +
		'&units=f';

	request({ url, json: true }, (error, { body }) => {
		console.log(body);

		if (error) {
			callback('Unable to connect to weather service!', undefined);
		} else if (body.error) {
			callback('Unable to find location', undefined);
		} else {
			callback(
				undefined,
				body.current.weather_descriptions +
					' .It is currently ' +
					body.current.temperature +
					' degress out. But it feels like' +
					body.current.feelslike +
					'degrees.'
			);
		}
	});
};

module.exports = forecast;
