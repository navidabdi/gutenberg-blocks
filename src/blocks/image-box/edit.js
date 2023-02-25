import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

// colors
import colors from '../../utilities/colors-palette';

export default function Edit({ attributes, setAttributes }) {
	const { content, color } = attributes;
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'boilerplate')}
					initialOpen={true}
				>
					<p className="custom__editor__label">
						{__('Text Color', 'boilerplate')}
					</p>
					<ColorPalette
						colors={colors}
						value={color}
						onChange={(newColor) =>
							setAttributes({ color: newColor })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<RichText
					tagName="h4"
					value={content}
					onChange={(newContent) =>
						setAttributes({ content: newContent })
					}
					style={{ color }}
				/>
			</div>
		</Fragment>
	);
}
