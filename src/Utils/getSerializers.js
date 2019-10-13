import React from 'react';

import {
	DefaultBlock,
	Paragraph,
	Heading,
	Columns,
	Column,
	Cover,
} from '../components';
const getSerializers = () => {
	const serializers = {
		'core/audio': DefaultBlock,
		'core/button': DefaultBlock,
		'core/code': DefaultBlock,
		'core/column': Column,
		'core/columns': Columns,
		'core/cover': Cover,
		'core/file': DefaultBlock,
		'core/gallery': DefaultBlock,
		'core/heading': Heading,
		'core/html': DefaultBlock,
		'core/image': DefaultBlock,
		'core/image': DefaultBlock,
		'core/list': DefaultBlock,
		'core/paragraph': Paragraph,
		'core/preformatted': DefaultBlock,
		'core/pullquote': DefaultBlock,
		'core/quote': DefaultBlock,
		'core/separator': DefaultBlock,
		'core/spacer': DefaultBlock,
		'core/video': DefaultBlock,
	};

	return serializers;
};

export default getSerializers;
