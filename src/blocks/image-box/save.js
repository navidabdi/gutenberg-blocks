import {useBlockProps, RichText} from '@wordpress/block-editor';

export default function Save({attributes}) {
	const {heading, headingColor, content, contentColor, image} = attributes;
	return (
		<div {...useBlockProps.save()}>
			<img className="" src={image}/>
			<RichText.Content tagName="h4" value={heading} style={{headingColor}}/>
			<RichText.Content tagName="p" value={content} style={{contentColor}}/>
		</div>
	);
}
