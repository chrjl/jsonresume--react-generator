# Notes

JSON Resume theme (<https://jsonresume.org/themes/>)

> Module needs to export a function called `render` that takes a `resume.json` and returns a plain HTML string.

Tags
: React, JSX, CSS modules

> FIXME:
>
> - Education - endDate undefined

> TODO: [[components-rendering]]
>
> - [x] `HorizontalCard`
> - [x] `DefinitionTable`
> - [x] `HorizontalListLeft`
> - [x] `HorizontalListRight`
> - [x] Turn `VerticalCard` components (`Education`, `Projects`) into grid containers
> - [ ] Refactor `VerticalCard` and `HorizontalCard` into a single `Card` component, with `Vertical` and `Horizontal` variants
> - [ ] Top-level `App` component: CSS Module with `.paper` for 

> TODO: documentation - [[resume]] schema
>
> - [ ] Projects: url - split comma-separated text
> - [ ] Projects: description - split `\n`-separated text
> - [ ] Experience &rarr; `<WorkCard>`
> - [ ] Work: department

> TODO: build
>
> - [ ] Preprocess resume schema
>   - [ ] all sections into standardized fields: title, subtitle, categories (definition list/table), description, highlights (list)
>   - [ ] allow a `hidden: Boolean` field
> - [ ] Migrate to TypeScript (in progress)

> TODO: UI
>
> - Feature toggles
>   - [ ] paper preview: adjust margins
>   - [ ] paper preview: adjust paper size
>   - [x] section visibility
>   - [ ] section order
>   - [ ] filter `hidden` attribute in JSON items

## App

Render React (ab)using CSS to force the app into paper size (using border box sizing, and width and padding specified in inches) and present a page that can be printed exactly as seen in browser.

- [ ] How will it render on mobile?

## Utility components

### `HorizontalListLeft`

Building a wrapping horizontal list with internal separators, using flexbox:

- An unordered list serves as the flexbox container for `inline` list items. This removes the list marker.
- The separator is placed as an `inline-block` into the list items using the `::before` pseudoelement (or left border). Item separation is specified by setting the `width` of the separator pseudoelement (or list item padding). Notably, the separator is attached to all list items, including the `first-child`, shifting each line to the right.
- The list items are realigned (i.e. the horizontal shift of each line is cancelled) by placing the unordered list is into a supercontainer, using a negative `margin-left` on the flex container that cancels out the separator width.
- Hiding `overflow` of the supercontainer hides the separator that begins each new line.

### `HorizontalListRight`

Works the same as `HorizontalListLeft`, but the flex container's `flex-flow` is set to right align list items, separators are placed `::after` each list item, and negative `margin-right` is used to realign and hide the right-most separators.
