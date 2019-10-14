import React from 'react';
import classNames from 'classnames';
import cleanName from '../../Utils/cleanName';
const Heading = (props) => {
	const classes = classNames('wp-block-' + cleanName(props.name), {
		[`${props.className}`]: props.className,
		'has-text-color': props.textColor || props.customTextColor,
		[`has-${props.textColor}-color`]: props.textColor,
		[`has-${props.fontSize}-font-size`]: props.fontSize,
	});

	const styles = {
		textAlign: props.align,
		fontSize: props.customFontSize,
		color: props.customTextColor,
	};
	const headingProps = {
		style: styles,
		className: classes,
		dangerouslySetInnerHTML: { __html: props.content },
		id: props.anchor,
	};
	return React.createElement(props.mark, headingProps, null);
};

export default Heading;
