/**
 * External dependencies
 */
const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		slug: 'block-template',
        namespace: 'rrze',
		category: 'text',
		title: 'Block Template',
		description: 'A WordPress Block Template.',
        author: 'RRZE Webteam',
		dashicon: 'text-page',
		attributes: {
			message: {
				type: 'string',
				source: 'text',
				selector: 'div',
			},
		},
		supports: {
			html: false,
		},
	},
	variants: {
		static: {},
		dynamic: {
			attributes: {
				message: {
					type: 'string',
				},
			},
			render: 'file:./render.php',
		},
	},
	pluginTemplatesPath: join( __dirname, 'plugin-templates' ),
	blockTemplatesPath: join( __dirname, 'block-templates' ),
	assetsPath: join( __dirname, 'assets' ),
};
