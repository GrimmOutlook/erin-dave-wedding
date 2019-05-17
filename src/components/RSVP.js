import React from 'react';

import './RSVP.css';

const RSVP = () => (
	<section id="rsvp" className="container__rsvp">
		<h1>RSVP</h1>
		<form name="contact" method="POST" data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />
			<p>Please RSVP by August 1st</p>
			<fieldset className="field__attend">
				<legend>Will You Be Attending?</legend>
				<div className="attend__group">
					<div className="input__attend">
						<input type="radio" name="rsvp" id="yes" value="yes" />
						<label htmlFor="yes">
							<span className="attend__btn" />
							Accept
						</label>
					</div>
					<div className="input__attend">
						<input type="radio" name="rsvp" id="no" value="no" />
						<label htmlFor="no">
							<span className="attend__btn" />
							Decline
						</label>
					</div>
				</div>
			</fieldset>
			<fieldset className="field__name">
				<div className="input__name">
					<label htmlFor="firstName">First Name:</label>
					<input type="text" name="firstName" id="firstName" />
				</div>
				<div className="input__name">
					<label htmlFor="lastName">Last Name:</label>
					<input type="text" name="lastName" id="lastName" />
				</div>
				<div className="input__name">
					<label htmlFor="email">Email:</label>
					<input type="email" name="email" id="email" />
				</div>
			</fieldset>
			<fieldset className="field__song">
				<legend align="center">Request a song to play at the reception:</legend>
				<div className="input__song">
					<label htmlFor="song">Song:</label>
					<input type="text" name="song" id="song" />
				</div>
				<div className="input__song">
					<label htmlFor="artist">Artist:</label>
					<input type="text" name="artist" id="artist" />
				</div>
				<div>
					<button type="submit" className="btn__submit">
						Submit
					</button>
				</div>
			</fieldset>
		</form>
	</section>
);

export default RSVP;
