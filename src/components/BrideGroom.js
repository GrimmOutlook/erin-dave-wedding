import React from 'react';

import './BrideGroom.css';

const BrideGroom = () => (
	<>
		<section className="bridegroom" id="bridegroom">
			<h1>The Bride</h1>
			<div className="bridegroom__grid">
				<div className="wrapper__bridegroom">
					<div>
						<img src="/images/erin-paris.jpg" alt="Erin, the bride" className="photo__bride" />
					</div>
					<div className="bio__container">
						<div className="name__bridegroom">Erin Cantwell</div>
						<div className="bio__bridegroom">
							Erin was born in Trenton, NJ and after living in seven different states, spent most of her childhood in the Tampa area.
							After graduating with a degree in Wildlife Ecology from the University of Florida, she moved to Pensacola to work at the
							Gulf Breeze Zoo. Since moving to Baltimore in 2011, she has become an Animal Collections Manager at the Maryland Zoo. She
							enjoys hiking, traveling, solving puzzles, hanging out with friends, and the occasional glass of Muscato. Her two
							wonderful parents - Jay and Rosemary - along with her sister, Misty will be in attendance at the wedding.
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="bridegroom">
			<h1>The Groom</h1>
			<div className="bridegroom__grid">
				<div className="wrapper__bridegroom">
					<div>
						<img src="/images/dave-olympic-crop2.jpg" alt="Dave, the groom" className="photo__bride" />
					</div>
					<div className="bio__container">
						<div className="name__bridegroom">Dave Grimm</div>
						<div className="bio__bridegroom">
							Dave was raised in the Pittsburgh area and attended college at Penn State University, where he majored in Civil
							Engineering. After moving to the Annapolis / Baltimore area, he worked as a Civil Engineer for 15+ years before switching
							careers to web development. He enjoys <span className="bio__dave">reading trashy romance novels</span> hiking, tennis,
							golf, racketball, hanging out with friends, and the occasional beer. His two wonderful parents - Bob and Cindy - along
							with his sister, Eileen will be in attendance at the wedding.
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
);

export default BrideGroom;
