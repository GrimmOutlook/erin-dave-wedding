import React from 'react';

import './RSVP.css';

const RSVP = () => (
	<section id="rsvp" className="container__rsvp">
		<h1>RSVP</h1>
		<form name="contact" method="POST" data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />
			<p>Please RSVP by August 1st</p>
			<fieldset className="field__attend">
				<legend className="legend__attend">Will You Be Attending?</legend>
				<div className="form__group">
					<div className="form__radio-group">
						<label className="form__radio-label">
							<input type="radio" className="form__radio-input" name="rsvp" id="yes" value="yes" />
							<span className="form__radio-button" />
							Accept
						</label>
					</div>
					<div className="form__radio-group">
						<label className="form__radio-label">
							<input type="radio" className="form__radio-input" name="rsvp" id="no" value="no" />
							<span className="form__radio-button" />
							Decline
						</label>
					</div>
				</div>
			</fieldset>
			<fieldset className="field__name">
				<div className="input__name">
					<label htmlFor="firstName">First Name:</label>
					<input type="text" className="input__bar" name="firstName" id="firstName" />
				</div>
				<div className="input__name">
					<label htmlFor="lastName">Last Name:</label>
					<input type="text" className="input__bar" name="lastName" id="lastName" />
				</div>
				<div className="input__name">
					<label htmlFor="email">Email:</label>
					<input type="email" className="input__bar" name="email" id="email" />
				</div>
			</fieldset>
			<fieldset className="field__song">
				<legend align="center">Request a song to play at the reception:</legend>
				<div className="input__song">
					<label htmlFor="song">Song:</label>
					<input type="text" className="input__bar" name="song" id="song" />
				</div>
				<div className="input__song">
					<label htmlFor="artist">Artist:</label>
					<input type="text" className="input__bar" name="artist" id="artist" />
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
