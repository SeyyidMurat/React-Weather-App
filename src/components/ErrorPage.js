import React from 'react';

const ErrorPage = (props) => {
	return (
		<div className="error">
			<h2>{props.error}</h2>	
		</div>
	);
};

export default ErrorPage;
