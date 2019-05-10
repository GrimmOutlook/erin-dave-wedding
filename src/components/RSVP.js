import React from 'react';

import './RSVP.css';

const RSVP = () => (
	<section id="rsvp" className="container__rsvp">
		<h1>RSVP</h1>
		<form name="contact" netlify>
			<p>Please RSVP by August 1st</p>
			<fieldset>
				<legend>Will You Be Attending?</legend>
				<input type="radio" name="rsvp" id="yes" value="yes" />
				<label htmlFor="yes">Accept</label>
				<input type="radio" name="rsvp" id="no" value="no" />
				<label htmlFor="no">Decline</label>
			</fieldset>
			<fieldset>
				<div>
					<label>
						First Name <input type="text" name="firstName" />
					</label>
				</div>
				<div>
					<label>
						Last Name
						<input type="text" name="lastName" />
					</label>
				</div>
				<div>
					<label>
						Email <input type="email" name="email" />
					</label>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</fieldset>
		</form>
	</section>
);

export default RSVP;
