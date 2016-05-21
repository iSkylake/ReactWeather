var React = require('react');

var About = (pros) => {
	return(
		<div>
			<h1 className="text-center">About</h1>
			<p>This is a weather app that gives you the temperature of the city given.</p>
			<p>This weather app was created with ReactJS in a Udemy course hosted by Andrew Mead</p>
			<p><strong>Used tools:</strong></p>
			<ol>
				<li><a href="https://facebook.github.io/react/">ReactJS</a> - Javascript framework</li>
				<li><a href="http://openweathermap.org/api">Open Weather Map</a> - Weather API</li>
				<li><a href="http://foundation.zurb.com/">Foundation</a> - CSS framework</li>
			</ol>
		</div>

	);
};

module.exports = About;