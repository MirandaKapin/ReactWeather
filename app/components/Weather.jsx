var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function (location) {
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});

		openWeatherMap.getTemp(location).then(function (apiData) {
			that.setState({
				location: apiData.fullCityName,
				country: apiData.country,
				temp: apiData.temp,
				isLoading: false
			})
		}, function (e) {
			that.setState({
				location: null,
				country: null,
				temp: null,
				isLoading: false, 
				errorMessage: e.message
			})
		})
	},
	componentDidMount: function () {
		var location = this.props.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash='#/';
		}
	},
	componentWillReceiveProps: function (newProps) {
		var location = newProps.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},
	render: function () {
		var {isLoading, temp, location, country, errorMessage} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <div className="text-center">Fetching weather...</div>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp} country={country}/>;
			} else {
				return <div></div>
			}
		}
		
		function renderError () { 
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage}/>
				)
			} 
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
});

module.exports = Weather;
