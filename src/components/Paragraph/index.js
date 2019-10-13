import React from 'react';

import classNames from 'classnames';
import cleanName from '../../Utils/cleanName';

const Paragraph = (props) => {
	const name = 'wp-block-' + cleanName(props.name);
	const classes = classNames(name, {
		[`${props.className}`]: props.className,
		'has-text-color': props.textColor || props.customTextColor,
		'has-drop-cap': props.dropCap,
		[`has-${props.textColor}-color`]: props.textColor,
		[`has-${props.fontSize}-font-size`]: props.fontSize,
		[`has-${props.backgroundColor}-background-color`]: props.backgroundColor,
		'has-background':
			props.backgroundColor || props.customBackgroundColor,
	});
	const styles = {
		textAlign: props.align,
		fontSize: props.customFontSize,
		backgroundColor: props.customBackgroundColor,
		color: props.customTextColor,
	};
	return (
		<p
			style={styles}
			className={classes}
			dangerouslySetInnerHTML={{ __html: props.content }}
		/>
	);
};

export default Paragraph;
