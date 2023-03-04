import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck,
	MediaPlaceholder
} from '@wordpress/block-editor';
import { PanelBody, ColorPalette, Button } from '@wordpress/components';
const { Fragment } = wp.element;
import './editor.scss';
import colors from '../../utilities/colors-palette';
import { ImagePlaceholder } from '../../images';

export default function Edit({ attributes, setAttributes }) {
	const { heading, headingColor, content, contentColor, image } = attributes;
	let imageUrl = image !== '' ? image : ImagePlaceholder;
	const ALLOWED_MEDIA_TYPES = ['image'];
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Image Picker', 'naviddev-gutenberg-blocks')}
					initialOpen={true}
				>
					{/* <MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({ image: media.url })}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							value={image}
							render={({ open }) => (
								<Button className="is-primary" onClick={open}>Open Media Library</Button>
							)}
						/>
					</MediaUploadCheck> */}
					<MediaPlaceholder
						onSelect={(media) => setAttributes({ image: media.url })}
						allowedTypes={['image']}
						multiple={false}
						labels={{ title: 'The Image' }}
					>
					</MediaPlaceholder>

					<img className="feature-icon" src={imageUrl} alt="feature-icon" />
				</PanelBody>
				<PanelBody
					title={__('Typography', 'naviddev-gutenberg-blocks')}
					initialOpen={false}
				>
					<p className="custom__editor__label">
						{__('Title Color', 'naviddev-gutenberg-blocks')}
					</p>
					<ColorPalette
						colors={colors}
						value={headingColor}
						onChange={(newColor) => setAttributes({ headingColor: newColor })}
					/>
					<p className="custom__editor__label">
						{__('Content Color', 'naviddev-gutenberg-blocks')}
					</p>
					<ColorPalette
						colors={colors}
						value={contentColor}
						onChange={(newColor) => setAttributes({ contentColor: newColor })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>

				<img className="feature-icon" src={imageUrl} />
				<RichText
					tagName="h4"
					value={heading}
					onChange={(newContent) => setAttributes({ heading: newContent })}
					style={{ headingColor }}
				/>
				<RichText
					tagName="p"
					value={content}
					onChange={(newContent) => setAttributes({ content: newContent })}
					style={{ contentColor }}
				/>
			</div>
		</Fragment>
	);
}
