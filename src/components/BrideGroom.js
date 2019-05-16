import React from 'react';

import './BrideGroom.css';

const BrideGroom = () => (
	<section className="bride__groom">
		<div className="grid__bridegroom">
			<div className="bride">
				<h1>The Bride</h1>
				{/* <div className="photo__bride" /> */}
				<div className="container__bride__photo">
					<div className="wrapper__bride">
						<img src="/images/erin-boat.jpg" alt="Erin boat" className="photo__bride__dt" />
					</div>
					<div className="wrapper__bride">
						<img src="/images/erin-primantis.jpg" alt="Erin Primantis" className="photo__bride__dt" />
					</div>
					<div className="wrapper__bride">
						<img src="/images/erin-vegas.jpg" alt="Erin purple zebra" className="photo__bride__dt" />
					</div>
				</div>
			</div>
			<div className="groom">
				<h1>The Groom</h1>
				<div className="container__bride__photo">
					<div className="wrapper__bride">
						<img src="/images/dave-olympic (1).jpg" alt="Dave Olympic Mtns" className="photo__groom__dt1" />
					</div>
					<div className="wrapper__bride">
						<img src="/images/dave-boat.jpg" alt="Dave on a boat" className="photo__groom__dt2" />
					</div>
					<div className="wrapper__bride">
						<img src="/images/erin-vegas.jpg" alt="Erin purple zebra" className="photo__bride__dt" />
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default BrideGroom;
