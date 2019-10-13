import React from 'react';
import classNames from 'classnames';
import cleanName from '../../Utils/cleanName';


const Columns = (props) => {
	const name = 'wp-block-' + cleanName(props.name);
	const classes = classNames(name, {
		[`${props.className}`]: props.className,
		[`has-${props.columns}-columns`]: props.columns,
	});
	return (
		<div className={classes}>
			{props.children}
		</div>
	)
}

export default Columns;