# The typography

## Embed
You can name your embed variable anything you want, we usually start with `$font-primary`.
```scss
$font-primary: (
	font-family: (HelveticaNeue, sans-serif),
	weights: (
		'Regular': 400,
		'Medium': 500,
		'Bold': 600
	),
	font-weights: true,
	path: '/fonts',
	files: (
		'woff',
		'woff2',
		'ttf'
	),
	use: (
		'h1',
		'p',
		'body'
	),
	types: (
		'normal',
		'italic'
	)
);

```

## Filenames
Your filenames need to correspond with our syntax: `FontName-FontWeight.extension`, `HelveticaNeue-Bold.woff` f.e., if you want to add an italic font you can also add a font type after FontWeight, but it's not necessary with a normal font.

We only look for the files of the first font supplied in the `font-family` array, the rest of the fonts should be system font backups.

### Use
In the `use` array you can add any css selector that you would like to set this font-family on, `use: ('h2', 'footer h1 ~ p')` is allowed for example ;).
