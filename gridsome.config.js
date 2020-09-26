//Enable sass/scss
const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/custom.scss'),
      ],
    })
}

//Default config module
module.exports = {
	siteName: 'Beers',
	templates: {
		Beers: [
		  {
			path: '/:name/',
			component: './src/templates/Beer.vue'
		  }
		]
	},
	//Webpack
	chainWebpack (config) {
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

		types.forEach(type => {
		  addStyleResource(config.module.rule('scss').oneOf(type))
		})
	}
}
