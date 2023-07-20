# Notes

JSON Resume theme (<https://jsonresume.org/themes/>)

> Module needs to export a function called `render` that takes a `resume.json` and returns a plain HTML string.

Tags
: React, JSX, CSS modules

> TODO: [[components]]
>
> - [x] `HorizontalCard`
> - [x] `DefinitionTable`
> - [ ] Turn `VerticalCard` components (`Education`, `Projects`) into flex containers

> TODO: [[resume]] schema
>
> - [ ] Projects: url - split comma-separated list
> - [ ] Experience &rarr; `<WorkCard>`
> - [ ] Work: department

> TODO: toggles
>
> - [ ] paper preview: `hr.paper-size`
> - [ ] section visibility
> - [ ] section dimming
> - [ ] filter `hidden` attribute in JSON items

> TODO: build
>
> - [ ] migrate to Typescript

## App

Render React (ab)using CSS to force the app into paper size (using border box sizing, and width and padding specified in inches) and present a page that can be printed exactly as seen in browser.

### Authoring

[[authoring]]

### Styling

CSS global styles

- [x] CSS reset
- [x] CSS paper size

Component styles

- CSS modules
- CSS nesting

  - Supported by Chrome since version 112 (I am using version 114).
  - Supported, but not enabled by default, by Firefox since version 115. Will be supported by default from version 117. (I am using version 115.)

Text formatting

- [x] `react-markdown` to allow formatting in `resume.json` via markdown (rather than HTML with `dangerouslySetInnerHTML`)
- [x] `white-space: pre-line` to allow `\n` line breaks

Absolute units on mobile

- [ ] How will it render on mobile?
