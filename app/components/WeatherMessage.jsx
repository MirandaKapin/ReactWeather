var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
		<h4 className="text-center">
			{temp}&#8457; in <span className="capitalize">{location}</span>.
		</h4> 
	)
};

module.exports = WeatherMessage;
