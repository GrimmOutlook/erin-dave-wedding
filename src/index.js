import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/Nav';
import Hero from './components/Hero';
import BrideGroom from './components/BrideGroom';
import WeddingParty from './components/WeddingParty';
import WhenWhere from './components/WhenWhere';
import Lodging from './components/Lodging';
import RSVP from './components/RSVP';
import Registry from './components/Registry';

import './mystyles.scss';

const BRIDESMAIDS = [
	{
		id: 1,
		name: 'Misty Cantwell',
		title: 'Maid of Honor',
		bio: 'block of text about person. block of text about person. block of text about person. block of text about person.',
		mainImage: '/images/erin-misty.JPG',
		alt: 'Misty - Maid of Honor',
		hoverImageClass: 'photo__maid1',
	},
	{
		id: 2,
		name: 'Cristina Snow',
		title: 'Bridesmaid',
		bio: 'block of text about person. block of text about person. block of text about person. block of text about person.',
		mainImage: '/images/erin-cristina2.jpg',
		alt: 'Cristina - Bridesmaid',
		hoverImageClass: 'photo__maid2',
	},
	{
		id: 3,
		name: 'Claire MacNamara',
		title: 'Bridesmaid',
		bio: 'block of text about person. block of text about person. block of text about person. block of text about person.',
		mainImage: '/images/erin-claire.jpg',
		alt: 'Claire - Bridesmaid',
		hoverImageClass: 'photo__maid3',
	},
];

const GROOMSMEN = [
	{
		id: 4,
		name: 'Aaron Stearns',
		title: 'Best Man',
		bio: 'block of text about person. block of text about person. block of text about person. block of text about person.',
		mainImage: '/images/dave-aaron.jpg',
		alt: 'Aaron - Best Man',
		hoverImageClass: 'photo__groomsman1',
	},
	{
		id: 5,
		name: 'Scott Scherer',
		title: 'Groomsman',
		bio: 'block of text about person. block of text about person. block of text about person. block of text about person.',
		mainImage: '/images/dave-olympic (1).jpg',
		alt: 'Scott - Groomsman',
		hoverImageClass: 'photo__groomsman2',
	},
	{
		id: 6,
		name: 'Sean Curry',
		title: 'Groomsman',
		bio: 'block of text about person. block of text about person. block of text about person. block of text about person.',
		mainImage: '/images/dave-sean.jpg',
		alt: 'Sean - Groomsman',
		hoverImageClass: 'photo__groomsman3',
	},
];

const App = () => (
	<React.Fragment>
		<Nav />
		<Hero />
		<BrideGroom />
		<WeddingParty weddingParty={BRIDESMAIDS} />
		<WeddingParty weddingParty={GROOMSMEN} />
		<WhenWhere />
		<Lodging />
		<RSVP />
		<Registry />
	</React.Fragment>
);

console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

ReactDOM.render(<App />, document.getElementById('app'));
