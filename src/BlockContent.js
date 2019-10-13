import React from 'react';
import propTypes from 'prop-types';

import blocksToElements from './Utils/blocksToElements';

const BlockContent = ({
	blocks,
	userSerializers,
	renderContainer,
	className,
}) => {
	const elementProps = {
		renderContainer,
		className,
	};
	return blocksToElements(blocks, userSerializers, elementProps);
};

export default BlockContent;
