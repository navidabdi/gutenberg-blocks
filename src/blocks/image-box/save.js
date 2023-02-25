// import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { content, color } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<RichText.Content tagName="h4" value={content} style={{ color }} />
		</div>
	);
}
