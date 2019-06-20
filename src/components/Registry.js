import React from 'react';

import './Registry.css';

const Registry = () => (
	<section className="container__registry" id="registries">
		<h1 className="registry__title">Registries</h1>
		<div className="registry__blurb">
			We have chosen not to regiser for wedding gifts. However, should you insist on making a monetary contribution, we would invite you to make
			a donation to one of the four charities below through our Good Beginning website, which will track all contributions and make the
			donations on your behalf. You can do so by clicking the logo below or by clicking any of the listed charities.
			{/* In lieu of gifts, gift cards, or money, we ask that you make a donation to one of the four charities listed below, or to our honeymoon */}
			{/* fund. Make your donation to any of the four charities listed below here: */}
			<br />
			<a href="https://thegoodbeginning.com/registries/david-grimm-erin-cantwell/" target="_blank" rel="noopener noreferrer">
				<img src="/images/good-beginning-logo.png" alt="Good Beginning Logo" />
			</a>
			<div className="divider" />
			<br />
			Or alternatively, you can contribute to our honeymoon fund for our honeymoon to Finland through our HoneyFund site by clicking the link
			below:
			<br />
			<a href="https://www.honeyfund.com/wedding/HappilyEverGrimm" target="_blank" rel="noopener noreferrer">
				<img src="/images/honeyfund-logo.svg" alt="Honeyfund logo" className="logo__honeyfund" />
				<p className="registry__label">Honeymoon in Finland</p>
			</a>
		</div>
		<div className="divider" />
		<a href="https://thegoodbeginning.com/registries/david-grimm-erin-cantwell/" target="_blank" rel="noopener noreferrer">
			<div className="charity__block-left">
				<div className="logo__block">
					<img src="/images/wwp_logo_black.png" alt="Wounded Warrior Project logo" className="logo__charity" />
					<p className="registry__label">Wounded Warrior Project</p>
				</div>
				<p className="description">
					The mission of Wounded Warrior Project is to honor and empower wounded warriors. Their purpose is: to raise awareness and enlist
					the public's aid for the needs of severely injured service men and women; to help severely injured service members aid and assist
					each other; and to provide unique, direct programs and services to meet the needs of severely injured service members.
				</p>
			</div>
		</a>
		<div className="divider" />
		<a href="https://thegoodbeginning.com/registries/david-grimm-erin-cantwell/" target="_blank" rel="noopener noreferrer">
			<div className="charity__block-right">
				<div className="logo__block">
					<img src="/images/make-logo.jpeg" alt="MAKE Studio logo" className="logo__charity-large" />
					<p className="registry__label">MAKE Studio</p>
				</div>
				<p className="description">
					Make Studio is a 501(c)3 community-based arts organization located in Baltimore, MD. Founded in 2010 with the mission of providing
					multi-modal arts programming to individuals with disabilities, Make Studio aims to put art and abilities to work throughout
					Baltimore and beyond to create more inclusive communities for all.
				</p>
			</div>
		</a>
		<div className="divider" />
		<a href="https://thegoodbeginning.com/registries/david-grimm-erin-cantwell/" target="_blank" rel="noopener noreferrer">
			<div className="charity__block-left">
				<div className="logo__block">
					<img src="/images/bcssn-logo-color.png" alt="Baltimore County Student Support Network logo" className="logo__charity-large" />
					<p className="registry__label">Baltimore County Student Support Network</p>
				</div>
				<p className="description">
					The Student Network helps students struggling every day with the effects of poverty and homelessness by donating food, clothing
					and personal care items, basic items they and their families often cannot afford.
				</p>
			</div>
		</a>
		<div className="divider" />
		<a href="https://thegoodbeginning.com/registries/david-grimm-erin-cantwell/" target="_blank" rel="noopener noreferrer">
			<div className="charity__block-right">
				<div className="logo__block">
					<img src="/images/CatholicCharities.png" alt="Maryland Catholic Charities logo" className="logo__charity" />
					<p className="registry__label">Catholic Charities of Maryland</p>
				</div>
				<p className="description">
					Catholic Charities serves and supports children and families in crisis, people living in poverty, individuals with intellectual
					disabilities, our new neighbors in the immigrant community and older Marylanders. Their programs and services address both
					immediate needs and provide support and preparation for fostering the independence and self-sufficiency of their clients.
				</p>
			</div>
		</a>
		{/* <div className="divider" />
		<a href="https://www.honeyfund.com/wedding/HappilyEverGrimm" target="_blank" rel="noopener noreferrer">
			<div className="charity__block-left">
				<div className="logo__block">
					<img src="/images/honeyfund-logo.svg" alt="Honeyfund logo" className="logo__charity" />
					<p className="registry__label">Honeymoon in Finland</p>
				</div>
				<p className="description">
					Block of text describing honeymoon & honeyfund. Block of text describing honeymoon & honeyfund. Block of text describing honeymoon
					& honeyfund. Block of text describing honeymoon & honeyfund. Block of text describing honeymoon & honeyfund. Block of text
					describing honeymoon & honeyfund.
				</p>
			</div>
		</a> */}
	</section>
);

export default Registry;
