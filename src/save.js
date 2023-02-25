import { TextControl } from "@wordpress/components";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import "./style.scss";

export default function Save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<p>{attributes.heading}</p>
		</div>
	);
}
