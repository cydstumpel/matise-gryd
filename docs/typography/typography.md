# The typography

## Embed
You can name your embed variable anything you want, we usually start with `$font-primary`.
```
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

:::tip
Font names should correspond with our model f.e. if you add the weight `Black` for HelveticaNeue it will look (in the supplied `path`) ''
:::
### defaults
