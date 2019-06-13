import React from 'react';

import './Nav.css';

class Nav extends React.Component {
	state = {
		mobileMenu: false,
	};

	toggleMobileMenu = () => this.setState(prevState => ({ mobileMenu: !prevState.mobileMenu }));

	render() {
		const { mobileMenu } = this.state;
		return (
			<div>
				<input type="checkbox" className="navigation__checkbox" id="navi-toggle" onClick={this.toggleMobileMenu} checked={mobileMenu} />
				<label htmlFor="navi-toggle" className="navigation__button">
					<span className="navigation__icon">&nbsp;</span>
				</label>
				<div className={mobileMenu ? 'navigation__background' : 'navigation__background hide'}>&nbsp;</div>
				<nav className={mobileMenu ? 'navigation__nav nav__desktop' : 'navigation__nav  nav__desktop hide'}>
					<ul className="navigation__list">
						<li className="navigation__item">
							<a href="#bridegroom" className="navigation__link" onClick={this.toggleMobileMenu}>
								Bride & Groom
							</a>
						</li>
						<li className="navigation__item">
							<a href="#weddingparty" className="navigation__link" onClick={this.toggleMobileMenu}>
								Wedding Party
							</a>
						</li>
						<li className="navigation__item">
							<a href="#whenwhere" className="navigation__link" onClick={this.toggleMobileMenu}>
								When & Where
							</a>
						</li>
						<li className="navigation__item">
							<a href="#timeline" className="navigation__link" onClick={this.toggleMobileMenu}>
								Timeline
							</a>
						</li>
						<li className="navigation__item">
							<a href="#lodging" className="navigation__link" onClick={this.toggleMobileMenu}>
								Lodging
							</a>
						</li>
						<li className="navigation__item">
							<a href="#rsvp" className="navigation__link" onClick={this.toggleMobileMenu}>
								RSVP
							</a>
						</li>
						<li className="navigation__item">
							<a href="#registries" className="navigation__link" onClick={this.toggleMobileMenu}>
								Registries
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Nav;
