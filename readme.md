
Gutenberg Blocks to React allows you to convert WordPress Gutenberg blocks into react components with a little help from the [WPblockserializer](https://github.com/chrisakelley/WPBlockSerializer) plugin.

## Installation

Add the [WPblockserializer](https://github.com/chrisakelley/WPBlockSerializer) plugin to your WordPress install and activate it.

**yarn**

`yarn add gutenberg-blocks-to-react`

**npm**

`npm i gutenberg-blocks-to-react --save`

#### Usage
```
import React from 'react';
import ReactDOM from 'react-dom';
import { BlockContent } from 'gutenberg-blocks-to-react';

//Add Default Styling.
import 'gutenberg-blocks-to-react/lib/style.css';

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

```

### Adding Custom Serializers.

```
const myCustomBlock = (props) => {
	return (
		<div className={props.className}>
			{props.content}
		</div>
	)
}

const mySerializers = {
	'my/block': myCustomBlock,
}

<BlockContent blocks={blocks} userSerializers={mySerializers}>
```

### Overriding Default Serializers

```
const myParagraph = (props) => {
	return (
		<p className={props.className} dangerouslySetInnerHTML={{ __html: props.content }} >
	)
}

const mySerializers = {
	'core/paragraph': myParagraph,
}

<BlockContent blocks={blocks} userSerializers={mySerializers}>
```


### Caveates
- Heading Anchor currently isn't supported, as its not stored in the attributes.
- If a block doesn't have a serializer it will be skipped from output.

### Current Unsupported Core Blocks
- Classic Block currently isnt parsed by parse_blocks
- Pagebreak Block
- Media & Text
- More Block
- All Widget Blocks
- All Embed Blocks