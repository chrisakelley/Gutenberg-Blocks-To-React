import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Cover = (props) => {

	const classes = classNames( 'wp-block-cover', {
		'has-text-color': props.textColor || props.customTextColor,
		'has-drop-cap': props.dropCap,
		'has-small-font-size': 'small' === props.fontSize,
		'has-background':
			props.backgroundColor || props.customBackgroundColor,
     });

	const styles = {
		textAlign: props.align,
		fontSize: props.customFontSize,
          backgroundColor: props.customBackgroundColor,
          backgroundImage: 'url(' + props.url + ')',
		color: props.customTextColor,
     };

     return (
          <div className={classes} style={styles}>
               {props.children}
          </div>
     )
}

export default Cover;