# The grid

## Philosophy
Matise's grid is based on 24 columns, all our designs also fit on this grid. This makes it very easy to translate our designs into code.

## Functions
The `grid()` function is based on view widths (vw), `grid(1)` is therefore equal to 1/24 of the screen width. You can also use negative and decimal values.
A similar function in Gryd is the `rem()` function which turns pixel values to rem.
If you'd like to use the grid or rem functions inside a calc function, for example, use interpolation:
```scss
	.image {
		width: calc(#{grid(2)} + 2rem);		
	}
```
## Breakpoints
We have a few predefined breakpoints:
| Name        | Size in px    |
| ------------|---------------|
| small       | 750           |
| medium      | 1024          |
| mediumlarge | 1280          |
| large       | 1440          |
| xlarge      | 1600          |
| xxlarge     | 1920          |

These are the basis for both [classes](#classes) and [media queries](#media-queries), the syntax for classes is breakpoint name plus column size, f.e. `.mediumlarge-10`.

## Media queries
All breakpoints except for small have three media query options: `up`, `down` and `only`:

```scss
.container {
	@media #{$medium-down} {
		// 1024px and down
	}
	@media #{$medium-up} {
		// 1024px and up
	}
	@media #{$medium-only} {
		// Between 750px and 1024px
	}
}
```


## Classes
The classes are based on percentages in stead of view widths, so their actual width will depend on the width of the surrounding container element. The classes are available in both numbers and written out fractions, see the defaults for specifics.

### Usage
The following section will take up one third of the available width on large (see media queries) screens, half of the width on medium screens and the entire width on small screens.
```html
<section class="news-overview column small-full medium-half large-third"></section>
```
::: warning
The classes will not work unless the `.column` class is set on the element and are dependent on container sizes.
:::

You can also add a `.row` class to the container element which adds `display: flex` and some complementary styles to the container.
The following code will show the three columns next to each other on large screens and under each other on small screens.

```html
<section class="news-overview row">
	<section class="news-overview__item column small-full large-8">[...]</section>
	<section class="news-overview__item column small-full large-8">[...]</section>
	<section class="news-overview__item column small-full large-8">[...]</section>
</section>
```

### Column class options
| columns   | Fractions     |
| ----------|---------------|
| 0         |               |
| 1         |               |
| 2         |               |
| 3         |               |
| 4         | sixth         |
| 5         |               |
| 6         | quarter       |
| 7         |               |
| 8         | third         |
| 9         |               |
| 10        |               |
| 11        |               |
| 12        | half          |
| 13        |               |
| 14        |               |
| 15        |               |
| 16        | two-third     |
| 17        |               |
| 18        | three-quarter |
| 19        |               |
| 20        | five-sixth    |
| 21        |               |
| 22        |               |
| 23        |               |
| 24        | full          |
