import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav';
import Hero from './components/Hero';
import BrideGroom from './components/BrideGroom';
import WhenWhere from './components/WhenWhere';
import RSVP from './components/RSVP';

import './mystyles.scss';

const App = () => (
	<React.Fragment>
		<Nav />
		<Hero />
		<BrideGroom />
		<WhenWhere />
		<RSVP />
		{/* <div className="flex__container">
			<div className="save__date2" />
			<div className="save__date">
				<div className="save__date__text">
					<h2>Save The</h2>
					<h1 className="fancy__font">
						<span className="font__alt">d</span>at<span className="font__alt">E</span>
						<span className="fancy__font">Erin & Dave</span>
					</h1>
					<h2>September 7, 2019</h2>
					<h3>Columbia, Maryland</h3>
					<h3>More Details to Follow!</h3>
				</div>
			</div>
		</div> */}
		{/* <p>Wedding Stuff</p> */}
	</React.Fragment>
);

console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

ReactDOM.render(<App />, document.getElementById('app'));
