wp.domReady(function () {

    /**
     * A Group block variation with box shadow, border, and padding.
     */
    // wp.blocks.registerBlockVariation('core/group', {
    //     name: 'group-shadow-solid',
    //     title: 'Group - Shadow Solid',
    //     description: 'A group with a solid shadow',
    //     isDefault: false,
    //     attributes: {
    //         className: 'is-style-shadow-solid',
    //         style: {
    //             border: {
    //                 width: "1px"
    //             },
    //             spacing: {
    //                 padding: {
    //                     top: "var:preset|spacing|30",
    //                     right: "var:preset|spacing|30",
    //                     bottom: "var:preset|spacing|30",
    //                     left: "var:preset|spacing|30"
    //                 }
    //             }
    //         },
    //         borderColor: "contrast"
    //     },
    // });

	// wp.blocks.registerBlockVariation('core/group', {
	// 	name: 'group-content-box',
	// 	title: 'Group - Content Box',
	// 	description: 'A group for creating a Content Box',
	// 	isDefault: false,
	// 	attributes: {"style":{"spacing":{"padding":{"top":"var:preset|spacing|30","right":"var:preset|spacing|30","bottom":"var:preset|spacing|30","left":"var:preset|spacing|30"}},"border":{"radius":"20px","width":"2px"}},"borderColor":"contrast","backgroundColor":"cyan-bluish-gray","layout":{"type":"constrained"}},
	// 	innerBlocks: [
	// 		['core/heading', {
	// 			level: 3,
	// 			placeholder: 'Write your title..',
	// 		}],
	// 		['core/image', {} ],
	// 		['core/paragraph', {
	// 			placeholder: 'Start writing your story...'
	// 		}],
	// 		['core/buttons', {}, [
	// 			['core/button', {placeholder: 'Add your button here'},]
	// 		]],
	// 	]
	// });

    /**
     * Customize the default Media & Text block.
     */
    // wp.blocks.registerBlockVariation(
    //     'core/media-text',
    //     {
    //         name: 'custom-media-text',
    //         title: 'Media & Text Custom',
    //         isDefault: false,
    //         attributes: {
    //             mediaPosition: 'right',
    //             backgroundColor: 'secondary'
    //         },
    //         innerBlocks: [
    //             [
    //                 'core/heading',
    //                 {
    //                     level: 3,
    //                     placeholder: 'Heading'
    //                 }
    //             ],
    //             [
    //                 'core/paragraph',
    //                 {
    //                     placeholder: 'Start writing your story...'
    //                 }
    //             ]
    //         ]
    //     },
    // );

    /**
     * Disable the stack variation in the Group block.
     */
    // wp.blocks.unregisterBlockVariation('core/group', 'group-stack');
	//
    // /**
    //  * Disable all unused icon variations in the Social Icons block.
    //  */
    // const unusedSocialIcons = [
    //     'fivehundredpx',
    //     'amazon',
    //     'bandcamp',
    //     'behance',
    //     'chain',
    //     'codepen',
    //     'deviantart',
    //     'dribbble',
    //     'dropbox',
    //     'etsy',
    //     'feed',
    //     'flickr',
    //     'foursquare',
    //     'goodreads',
    //     'google',
    //     'instagram',
    //     'lastfm',
    //     'mastodon',
    //     'meetup',
    //     'medium',
    //     'patreon',
    //     'pinterest',
    //     'pocket',
    //     'reddit',
    //     'skype',
    //     'snapchat',
    //     'soundcloud',
    //     'spotify',
    //     'telegram',
    //     'tiktok', 'tumblr',
    //     'twitch',
    //     'vimeo',
    //     'vk',
    //     'whatsapp',
    //     'yelp',
    //     'youtube'
    // ];
    // unusedSocialIcons.forEach((icon) => wp.blocks.unregisterBlockVariation('core/social-link', icon));
});
