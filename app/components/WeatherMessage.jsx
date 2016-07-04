var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
		<div>
			It is {temp} degrees in {location}.
		</div>
	)
};

module.exports = WeatherMessage;
