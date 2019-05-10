import React from 'react';

import './Lodging.css';

const Lodging = () => (
	<section className="container__lodging">
		<h1>Lodging:</h1>
		<img src="/images/dt-logo.gif" alt="DoubleTree hotel logo" />
		<p>DoubleTree Hotel Columbia</p>
		<div>
			<p>
				For your comfort and convenience we&apos;ve made arrangements at The DoubleTree Hotel Columbia. A limited number of rooms have been
				reserved at a special rate for this occasion. The special room rate will be available until August 16th or until the group block is
				sold-out, whichever comes first.
			</p>
			<p>
				Reserve online by visiting:
				<a href="https://doubletree.hilton.com/en/dt/groups/personalized/B/BWICHDT-GCW-20190904/index.jhtml?WT.mc_id=POG" target="_blank">
					this link
				</a>{' '}
				call The DoubleTree Hotel Columbia directly (410) 997-1060 and mention the Grimm/Cantwell Wedding and the Group Code: GCW.
			</p>
		</div>
	</section>
);

export default Lodging;
