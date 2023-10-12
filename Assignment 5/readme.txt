1. CSS Grid layout:
-> Used in .navbar for evenly spaced navigation links using grid-template-columns: repeat(4, 1fr);.
-> Used in .grid-container for arranging the form containers side by side.
2. Flexbox layout:
-> The .navbar uses a flexbox layout with the mixin center-flex for centering items.
-> .footer-content displays its children using flexbox to horizontally space the footer sections.
-> .link-head is designed with flex to center its items.
-> .flex-links arranges the links in a row using flexbox, centering them and spacing them with the gap property.
3. Variables:
-> Used at the beginning to define consistent color schemes, dimensions, and other recurring styles throughout the stylesheet.
Examples include $font-family-default, $navbar-color, $link-color, etc.
Variables help in maintaining a consistent design and making future changes easier.
4. Interpolation:
-> Used to insert the values of SCSS variables inside styles.
Example in .container where we used calculate-container-width($columns, $column-width, $gutter-width).
Allows dynamic calculation of styles.
5. Custom Properties:
-> Defined under :root, an example is --transition-speed: 0.3s;.
This allows easy control of global values and promotes reusability.
6. Nesting:
-> Used throughout the stylesheet to keep related styles grouped, increasing readability.
Examples include nested styles under .navbar, .component, .grid-container, etc.
Nesting provides context for styles and reduces redundancy.

7. Functions:
-> calculate-container-width is a custom function used to compute the width of a container based on column and gutter widths.
Functions help to abstract complex calculations.
Used to insert the values of SCSS variables inside styles.
Example in .container where we used calculate-container-width($columns, $column-width, $gutter-width).
Allows dynamic calculation of styles.
8. Placeholder Selectors:
-> Defined as %img-common to create a common image styling.
It is extended in .component > div > img for applying common styles.
9. Mixins:
-> Defined as @mixin center-flex for easy reuse of flexbox centering.
This mixin is imported and then included in .navbar and other elements that require centering.
 