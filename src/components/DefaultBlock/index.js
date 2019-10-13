import React, { Fragment } from 'react';
import parse from 'html-react-parser';
const DefaultBlock = (props) => {
	const { children } = props;

	return (
		//!!! TODO
		//Fragment currently doesnt support dangerouslySetInnerHTML https://github.com/facebook/react/issues/12014
		//Utilizing html-react-parser for now for a cleaner output of individual blocks.
		<Fragment>
			{parse(props.content)}
		</Fragment>
	);
};

export default DefaultBlock;
