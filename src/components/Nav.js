import React from 'react';

import './Nav.css';

const Nav = () => (
	<div className="navigation">
		<input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
		<label htmlFor="navi-toggle" className="navigation__button">
			MENU
		</label>
		<div className="navigation__background">&nbsp;</div>
		<nav className="navigation__nav">
			<ul className="navigation__list">
				<li className="navigation__item">
					<a href="#bridegroom" className="navigation__link">
						Bride & Groom
					</a>
				</li>
				<li className="navigation__item">
					<a href="#weddingparty" className="navigation__link">
						Wedding Party
					</a>
				</li>
				<li className="navigation__item">
					<a href="#whenwhere" className="navigation__link">
						When & Where
					</a>
				</li>
				<li className="navigation__item">
					<a href="#lodging" className="navigation__link">
						Lodging
					</a>
				</li>
				<li className="navigation__item">
					<a href="#localactivities" className="navigation__link">
						Local Activities
					</a>
				</li>
				<li className="navigation__item">
					<a href="#rsvp" className="navigation__link">
						RSVP
					</a>
				</li>
				<li className="navigation__item">
					<a href="#registries" className="navigation__link">
						Registries
					</a>
				</li>
			</ul>
		</nav>
	</div>
);

export default Nav;
