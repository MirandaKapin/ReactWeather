var React = require('react');

var WeatherMessage = ({temp, location, country}) => {
	return (
		<h4 className="text-center">
			{temp}&#8457; in {location}, {country}.
		</h4> 
	)
};

module.exports = WeatherMessage;
