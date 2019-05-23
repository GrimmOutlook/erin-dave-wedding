import React from 'react';

import './WeddingParty.css';

const WeddingParty = () => (
	<section className="bride__groom" id="weddingparty">
		<div className="grid__bridegroom">
			<div className="bride">
				<h1>Bridesmaids</h1>
				{/* <div className="photo__bride" /> */}
				<div className="container__bride__photo">
					<div className="wrapper__bride">
						<img src="/images/erin-misty.JPG" alt="Misty Maid-of-Honor" className="photo__maid__dt1" />
					</div>
					<div className="wrapper__bride">
						<img src="/images/erin-cristina2.jpg" alt="Erin Cristina" className="photo__maid__dt2" />
					</div>
					<div className="wrapper__bride">
						<img src="/images/erin-claire.jpg" alt="Erin Claire" className="photo__maid__dt3" />
					</div>
				</div>
			</div>
			<div className="groom">
				<h1>Groomsmen</h1>
				<div className="container__bride__photo">
					<div className="wrapper__bride">
						<img src="/images/dave-olympic (1).jpg" alt="Dave Olympic Mtns" className="photo__bride__dt" />
					</div>
					<div className="wrapper__bride">
						<img src="/images/dave-boat.jpg" alt="Dave on a boat" className="photo__bride__dt" />
					</div>
					<div className="wrapper__bride">
						<img src="/images/erin-vegas.jpg" alt="Erin purple zebra" className="photo__bride__dt" />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default WeddingParty;
