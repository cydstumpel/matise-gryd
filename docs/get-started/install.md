# Install
Gryd is an scss framework by [Matise](https://matise.nl).

## NPM
```bash
npm i matise-gryd
```

## NPX
We created npx commands to create a nuxt or Wordpress website in an instant, we even already setup matise-gryd for you!

### Wordpress
[![NPM version](https://img.shields.io/npm/v/automatise-wordpress.svg?style=flat)](https://npmjs.com/package/automatise-wordpress) [![NPM downloads](https://img.shields.io/npm/dm/automatise-wordpress.svg?style=flat)](https://npmjs.com/package/automatise-wordpress)
```bash
npx automatise wordpress
```
### Nuxt
[![NPM version](https://img.shields.io/npm/v/automatise-nuxt.svg?style=flat)](https://npmjs.com/package/automatise-nuxt) [![NPM downloads](https://img.shields.io/npm/dm/automatise-nuxt.svg?style=flat)](https://npmjs.com/package/automatise-nuxt)
```bash
npx automatise nuxt
```

## Importing
Files to import in your app.scss file:
```sass
	@import 'color/index'
	// @import your custom color file here ^
	@import 'gryd-index';
	@import 'typography/typography'
	// @import your custom typography file here ^
	@import 'gryd-once';
	// @import add the rest of your files here.
```

## For Nuxt
At Matise we develop a lot with Vue's Nuxt so I included a way to import it in every component.

You can import the files as above in your app.scss file but then you won't have the functions automagically available in your components. At [Matise](https://matise.nl) we use the [style-resources-module](https://github.com/nuxt-community/style-resources-module), it allows you to globally add functions and variables. We import the app.scss separately to make sure those styles won't be imported multiple times.

For custom colors to work it's important to add your custom color file before the gryd-index scss file import.
```js
	[...]
	modules: [
		'@nuxtjs/style-resources'
	],
	styleResources: {
		scss: ['~/assets/scss/color/_index.scss', '@node_modules/matise-gryd/gryd-index.scss']
	},
	css: [
		'~/assets/scss/app.scss'
	],
	[...]
```

Our app.scss looks like this:

```scss
@import 'typography/typography'; // your typography files
// Import the rest of your files here.
@import '~matise-gryd/gryd-once'; // generated classes
```

## File structure
In our projects we recommend using the following file structure:
```
├─ scss
|	├── color
|	|	├── _custom-colors.scss // add your custom colors in an array
|	|	└── _index.scss
|	├── typography
|	|	├── _embed.scss // Embed your typography here
|	|	├── _spacing.scss // Specify spacing between typographical elements
|	|	├── _typography.scss // Import other files and include font loads
|	|	└── _usage.scss // Specify font-sizes and weights
|	├── variables
|	|	├── _variables.scss // Add global variables
|	|	└── _index.scss
|	└── app.scss
```

## Contribute
We'd love to hear your notes and issues with [this package](https://github.com/MatiseAms/matise-gryd).
