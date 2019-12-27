# The colors

## Custom Colors
Gryd comes with a small set of [`$default-colors`](#defaults), you don't have to edit this variable to use your own colors. In your [custom-colors.scss file](/get-started/install.html#file-structure) add a new variable called `$custom-colors` and overwrite or add your own colors:

```scss
$custom-colors: (
	'Dark': #101010,
	'Light': #ffffff,
	'Hotpink': #ff69b4
);

```

### Defaults
| Color name  | Color value   |
| ------------|---------------|
| 'Dark'      | #000000       |
| 'Light'     | #ffffff       |
| 'Yellow' 		| #ffcc00       |

## Functions
All defined colors are available in the `color()` function, this is still a bit of a work in progress. For now it's only possible to change the opacity:
```scss
h1 {
	color: color(Yellow, 0.2);
}
```
