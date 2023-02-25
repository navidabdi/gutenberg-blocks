import {useBlockProps, RichText} from '@wordpress/block-editor';

export default function Save({attributes}) {
	const {content, color, image} = attributes;
	return (
		<div {...useBlockProps.save()}>
			<img className="" src={image}/>
			<RichText.Content tagName="h4" value={content} style={{color}}/>
		</div>
	);
}
