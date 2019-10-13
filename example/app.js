import React from 'react';
import ReactDOM from 'react-dom';
import { BlockContent } from '../src';
import './style.scss';
import '../src/scss/style.scss';
import '../src/scss/theme.scss';

fetch('https://data.iwritecode.io/demo/wp-json/wp/v2/posts?slug=hello-world')
	.then(function(response) {
		if (response.status >= 400) {
			throw new Error('Bad response from server');
		}
		return response.json();
	})
	.then(function(post) {
		ReactDOM.render(
			<BlockContent blocks={post[0].serializedBlocks} renderContainer={true} />,
			document.getElementById('app'),
		);
});
