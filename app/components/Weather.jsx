var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function (location) {
		var that = this;

		this.setState({isLoading:true});

		openWeatherMap.getTemp(location).then(function (apiData) {
			that.setState({
				location: apiData.fullCityName,
				country: apiData.country,
				temp: apiData.temp,
				isLoading: false
			})
		}, function (errorMessage) {
			that.setState({
				location: null,
				country: null,
				temp: null,
				isLoading: false
			})
			alert(errorMessage);
		})
	},
	render: function () {
		var {isLoading, temp, location, country} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <div className="text-center">Fetching weather...</div>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp} country={country}/>;
			} else {
				return <div></div>
			}
		}

		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;
