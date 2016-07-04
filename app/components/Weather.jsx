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

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			})
		}, function (errorMessage) {
			that.setState({
				location: null,
				temp: null,
				isLoading: false
			})
			alert(errorMessage);
		})
	},
	render: function () {
		var {isLoading, temp, location} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <div className="text-center">Fetching weather...</div>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp}/>;
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
