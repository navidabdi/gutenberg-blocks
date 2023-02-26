import {__} from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	MediaUpload,
	MediaUploadCheck
} from '@wordpress/block-editor';
import {PanelBody, ColorPalette, Button} from '@wordpress/components';
const {Fragment} = wp.element;
import './editor.scss';
import colors from '../../utilities/colors-palette';
import {ImagePlaceholder} from '../../images';

export default function Edit({attributes, setAttributes}) {
	const {heading, headingColor, content, contentColor, image} = attributes;
	const ALLOWED_MEDIA_TYPES = ['image'];
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'naviddev-gutenberg-blocks')}
					initialOpen={true}
				>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(media) => setAttributes({image: media.url})}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							value={image}
							render={({open}) => (
								<Button onClick={open}>Open Media Library</Button>
							)}
						/>
					</MediaUploadCheck>

					<img className="feature-icon" src={image}/>

					<p className="custom__editor__label">
						{__('Title Color', 'naviddev-gutenberg-blocks')}
					</p>
					<ColorPalette
						colors={colors}
						value={headingColor}
						onChange={(newColor) => setAttributes({headingColor: newColor})}
					/>
					<p className="custom__editor__label">
						{__('Content Color', 'naviddev-gutenberg-blocks')}
					</p>
					<ColorPalette
						colors={colors}
						value={contentColor}
						onChange={(newColor) => setAttributes({contentColor: newColor})}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<img className="feature-icon" src={image ?? ImagePlaceholder}/>
				<RichText
					tagName="h4"
					value={heading}
					onChange={(newContent) => setAttributes({heading: newContent})}
					style={{headingColor}}
				/>
				<RichText
					tagName="p"
					value={content}
					onChange={(newContent) => setAttributes({content: newContent})}
					style={{contentColor}}
				/>
			</div>
		</Fragment>
	);
}
