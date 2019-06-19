import React from 'react';

import './OurStory.css';

const OurStory = () => (
	<section className="bridegroom" id="bridegroom">
		<h1>Our Story</h1>
		<div className="engage__container">
			<div className="ring__image__container">
				<img src="/images/hull-street.jpg" alt="Erin plants a kiss on Dave's cheek at Hull Street Blues" className="ring__image" />
			</div>
			<div className="ring__image__container">
				<img src="/images/erin-dave-cmas.jpg" alt="Dave & Erin at Christmas, looking dapper" className="ring__image" />
			</div>
			<div className="ring__image__container">
				<img src="/images/erin-dave-redstar-small.jpg" alt="The Red Star with Dave & Erin" className="ring__image" />
			</div>
		</div>
		<div className="bridegroom__grid">
			<div className="bio">
				We met at a Halloween party in 2013 at Claire (Bridesmaid) and Aaron's (Best Man) apartment. A few days later, we went on our first
				date at The Red Star in Fell's Point. We hit it off and still go on dates to this day! Our adventures have taken us through 11 states
				& DC, many miles of hikes through 5 National Parks, many trips camping and to Deep Creek Lake, and maybe a few bars & breweries. We
				were engaged on October 6, 2018 at a picturesque spot overlooking a waterfall and the large valley below at Shenandoah National Park.
				Erin said yes even though Dave proposed with a $10 ring from Target due to an error in delivery of the real ring!
			</div>
		</div>
		<div className="engage__container">
			<div className="ring__image__container">
				<img src="/images/shen1.jpg" alt="engagement ring among Cherry Blossoms" className="ring__image" />
			</div>
			<div className="ring__image__container">
				<img src="/images/ring.jpg" alt="Shenandoah waterfall" className="ring__image" />
			</div>
			<div className="ring__image__container">
				<img src="/images/shen2.jpg" alt="Engagement spot with Dave & Erin" className="ring__image" />
			</div>
		</div>
	</section>
);

export default OurStory;
