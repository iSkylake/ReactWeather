var React = require('react');

var WeatherMessage = ({location, temp}) => {
	return(
		<h3 className="text-center">{temp}°C in {location}</h3>
	);
}

module.exports = WeatherMessage;