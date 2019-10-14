import React from 'react';

import classNames from 'classnames';
import cleanName from '../../Utils/cleanName';

const MediaText = (props) => {
	const name = 'wp-block-' + cleanName(props.name);
	const classes = classNames(name, {
		[`${props.className}`]: props.className,
	});
	const styles = {
		gridTemplateColumns: props.mediaWidth ? props.mediaWidth + '% auto' : false,
	};
	return (
		<div className={classes} style={styles}>
			<figure className={name + '__media'}>
				<img src={props.media} />
			</figure>
			<div className={name + '__content'}>{props.children}</div>
		</div>
	);
};

export default MediaText;
