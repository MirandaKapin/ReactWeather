var React = require('react');
var {Link, IndexLink} = require('react-router');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

var Nav = React.createClass({
	onSearch: function(e) {
		e.preventDefault();

	  var location = this.refs.location.value;
		var encodedLocation = encodeURIComponent(location);

		if (location.length >0) {
			this.refs.location.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}
	},
	render: function () {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">Weather Application</li>
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
						<li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
						<li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
					</ul>
				</div>
				 
				<div className="top-bar-right"> 
					<form onSubmit={this.onSearch}>
						<ul className="menu">
							<li><input type="search" placeholder="Search Weather by City" ref="location" /></li>
							<li><input type="button" className="success button" value="Get Weather"/></li>
						</ul>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Nav;
