import React from 'react';

import './WeddingParty.css';

const WeddingParty = props => (
	<section className="bridesmaid" id="weddingparty">
		<h1>{props.weddingParty[0].id === 1 ? 'Bridesmaids' : 'Groomsmen'}</h1>
		<div className="bridesmaid__grid">
			{props.weddingParty.map(item => (
				<div className="wrapper__bridesmaid">
					<div className="wrapper__image">
						<img src={item.mainImage} alt={item.alt} className={item.hoverImageClass} />
					</div>
					<div className="personal__info">
						<div className="name">{item.name}</div>
						<div className="title">{item.title}</div>
						<div className="bio">{item.bio}</div>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default WeddingParty;
