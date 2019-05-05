import React from 'react';

import './WhenWhere.css';

const WhenWhere = () => (
	<section id="whenwhere" className="container__whenwhere">
		<h1>5410 Leaf Treader Way, Columbia, MD 21044</h1>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6181.806674799779!2d-76.85159987753931!3d39.22236101855915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7df920a3dbf9f%3A0x9dd5502c97ba883b!2s5410+Leaf+Treader+Way%2C+Columbia%2C+MD+21044!5e0!3m2!1sen!2sus!4v1557019011705!5m2!1sen!2sus"
			width="100%"
			height="450"
			frameBorder="0"
			style={{ border: 0 }}
			allowFullScreen
		/>
	</section>
);

export default WhenWhere;
