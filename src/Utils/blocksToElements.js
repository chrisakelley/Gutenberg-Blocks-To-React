import * as React from 'react';
const renderElement = React.createElement;
import getSerializers from './getSerializers';
import mergeSerializers from './mergeSerializers';

const blocksToElements = (blocks, userSerializers, props) => {
	const { renderContainer, className } = props;
	const defaultSerializers = getSerializers();
	const serializers = userSerializers
		? mergeSerializers(defaultSerializers, userSerializers)
		: defaultSerializers;

	const renderBlock = (block, index) => {
		const name = block.name;
		const children = block.children.map(renderBlock);
		let serializer = serializers[name];
		if (!serializer) {
			console.warn('A serializer doesnt exist for ' + name);
			return;
		}

		const props = {
			name: block.name,
			key: block._key,
			children: children,
			content: block.content,
			...block.attributes,
		};
		return renderElement(serializer, props, children);
	};

	const nodes = blocks.map(renderBlock);

	const container = (
		<div className={className ? className : 'gbtr-container'}>
			{nodes}
		</div>
	);
	return renderContainer ? container : nodes;
};

export default blocksToElements;
