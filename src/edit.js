import { TextControl } from "@wordpress/components";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	return (
		<div {...useBlockProps()}>
			<InspectorControls key="setting">
				<TextControl
					className="block-name"
					label={"Heading"}
					value={attributes.heading}
					onChange={(val) => setAttributes({ heading: val })}
				/>
			</InspectorControls>
			<p>{attributes.heading}</p>
		</div>
	);
}
