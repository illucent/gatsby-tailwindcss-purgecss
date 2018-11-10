const path = require(`path`)
const glob = require(`glob`)

const PATHS = {
	src: path.join(__dirname, `src`),
}

module.exports = {
	paths: glob.sync(`${PATHS.src}/**/*.js`, { nodir: true }),
	extractors: [
		{
			// Custom extractor to allow special characters (like ":") in class names
			// See: https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css-with-purgecss
			extractor: class {
				static extract(content) {
					return content.match(/[A-Za-z0-9-_:/]+/g) || []
				}
			},
			extensions: [ `js` ],
		},
	],
	whitelist: [ `` ], // adjust for each project
	whitelistPatterns: [ /body/, /headroom/, /ReactModal/, /ril/ ], // adjust for each project
}
