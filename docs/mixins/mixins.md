# Mixins

## Min max
The min and max mixins help you add a min or max size to a grid sized value.

### Syntax
```scss
@include min-('css-property', gridsize, pixelsize);
@include max-('css-property', gridsize, pixelsize);
```
The mixin creates a media query based the min and max pixel size for a grid value.

```scss
h1 {
	font-size: grid(1); // grid size is 1
	@include min-('font-size', 1, 24); // min size is 24 pixels.
}

.item {
	padding-top: grid(1); // grid size is 1
	@include max-('padding-top', 1, 210); // max padding top is 210 pixels.
}
```
