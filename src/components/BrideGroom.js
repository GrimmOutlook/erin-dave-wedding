import React from 'react';

import './BrideGroom.css';

const BrideGroom = () => (
	<>
		<section className="bridegroom" id="bridegroom">
			<h1>The Bride</h1>
			<div className="bridegroom__grid">
				<div className="wrapper__bridegroom">
					{/* <div className="wrapper__image"> */}
					<div>
						{/* <img src="/images/erin-blossoms-crop.jpg" alt="Erin, the bride" className="photo__bride" /> */}
						{/* <img src="/images/erin-dc-stylish.jpg" alt="Erin, the bride" className="photo__bride" /> */}
						<img src="/images/erin-paris.jpg" alt="Erin, the bride" className="photo__bride" />
					</div>
					<div className="personal__info">
						<div className="name">Erin Cantwell</div>
						<div className="bio">
							Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info.
							Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info.
							Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info.
							Bio info, Bio Info, Bio Info.
						</div>
					</div>
				</div>
			</div>
		</section>
		<section className="bridegroom">
			<h1>The Groom</h1>
			<div className="bridegroom__grid">
				<div className="wrapper__bridegroom">
					{/* <div className="wrapper__image"> */}
					<div>
						<img src="/images/dave-olympic-crop2.jpg" alt="Dave, the groom" className="photo__bride" />
					</div>
					<div className="personal__info">
						<div className="name">Dave Grimm</div>
						<div className="bio">
							Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info.
							Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info.
							Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info. Bio info, Bio Info, Bio Info.
							Bio info, Bio Info, Bio Info.
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
);

export default BrideGroom;
