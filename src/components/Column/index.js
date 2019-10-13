import React from 'react'
import classNames from 'classnames';
import cleanName from '../../Utils/cleanName';

const Column = (props) =>{

	const name = 'wp-block-' + cleanName(props.name);
	const classes = classNames(name, {
		[`${props.className}`]: props.className,
	});

	return (
		<div className={classes}>
			{props.children}
		</div>
	)
}

export default Column;