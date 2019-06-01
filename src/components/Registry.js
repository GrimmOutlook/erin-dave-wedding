import React from 'react';

import './Registry.css';

const Registry = () => (
	<section className="container__registry" id="registry">
		<h1 className="registry__title">Registry:</h1>
		<p className="registry__blurb">
			In lieu of gifts, gift cards, or money, we ask that you make a donation to one of the four charities listed below, or to our honeymoon
			fund. Make your donation to any charity here:{' '}
			<a href="https://thegoodbeginning.com/registries/david-grimm-erin-cantwell/">TheGoodBeginning.com</a>
		</p>
		<img src="/images/wwp_logo_black.png" alt="Wounded Warrior Project logo" className="logo__charity" />
		<p className="registry__label">Wounded Warrior Project</p>
		<img src="/images/make-logo.jpeg" alt="MAKE Studio logo" className="logo__charity" />
		<p className="registry__label">MAKE Studio</p>
		<img src="/images/bcssn-logo-color.png" alt="Baltimore County Student Support Network logo" className="logo__charity" />
		<p className="registry__label">Baltimore County Student Support Network</p>
	</section>
);

export default Registry;
