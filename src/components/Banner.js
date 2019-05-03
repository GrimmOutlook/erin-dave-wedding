import React from 'react';

import './Banner.css';

const Banner = () => (
	<div className="banner__container">
		<h1>Erin & Dave</h1>
		<h3>Columbia, MD</h3>
		<p>
			September 7, 2019
			<br />
			4:30pm
		</p>
		<a href="#rsvp" className="button__rsvp">
			RSVP
		</a>
	</div>
);

export default Banner;
