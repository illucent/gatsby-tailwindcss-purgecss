const PurgeCssPlugin = require(`purgecss-webpack-plugin`)
const purgeCssConfig = require('./purgecss.config')

exports.onCreateWebpackConfig = ({ actions, stage }) => {
	if (stage.includes(`develop`)) return

	// Add PurgeCSS in production
	// See: https://github.com/gatsbyjs/gatsby/issues/5778#issuecomment-402481270
	if (stage.includes(`build`)) {
		actions.setWebpackConfig({
			plugins: [ new PurgeCssPlugin(purgeCssConfig) ],
		})
	}
}
