import React from 'react';

import './WeddingParty.css';

const WeddingParty = () => (
	<section className="bridesmaid" id="weddingparty">
		<h1>Bridesmaids</h1>
		<div className="bridesmaid__grid">
			<div className="wrapper__bridesmaid">
				<img src="/images/erin-misty.JPG" alt="Misty Maid-of-Honor" className="photo__maid1" />
				<div className="personal__info">
					<div className="name">Misty Cantwell</div>
					<div className="title">Maid of Honor</div>
					<div className="bio">
						block of text about person. block of text about person. block of text about person. block of text about person.
					</div>
				</div>
			</div>
			<div className="wrapper__bridesmaid">
				<img src="/images/erin-cristina2.jpg" alt="Erin Cristina" className="photo__maid2" />
				<div className="personal__info">
					<div className="name">Cristina Snow</div>
					<div className="title">Bridesmaid</div>
					<div className="bio">
						block of text about person. block of text about person. block of text about person. block of text about person.
					</div>
				</div>
			</div>
			<div className="wrapper__bridesmaid">
				<img src="/images/erin-claire.jpg" alt="Erin Claire" className="photo__maid3" />
				<div className="personal__info">
					<div className="name">Claire MacNamara</div>
					<div className="title">Bridesmaid</div>
					<div className="bio">
						block of text about person. block of text about person. block of text about person. block of text about person.
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default WeddingParty;
