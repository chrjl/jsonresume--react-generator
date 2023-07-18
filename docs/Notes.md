# Notes

JSON Resume theme (<https://jsonresume.org/themes/>)

> Module needs to export a function called `render` that takes a `resume.json` and returns a plain HTML string.

Tags
: React, JSX, CSS modules

> TODO: [[components]]
>
> - [ ] `HorizontalCard`
> - [ ] `DefinitionCard`

> TODO: [[resume]] schema
>
> - [ ] Projects
> - [ ] Experience

## App

Render React (ab)using CSS to force the app into paper size (using border box sizing, and width and padding specified in inches) and present a page that can be printed exactly as seen in browser.

### Authoring

- `prop-types`
  : Define `Component.propTypes`

- `react-markdown`
  : Create `ReactMarkdown` components from strings imported from JSON.

  ```jsx
  // import ReactMarkdown from 'react-markdown';

  <ReactMarkdown children={content} />
  ```

  See `#text-formatting` section in [[formatting]].

- Hide or dim sections using global css and section id.

  ```css
  /* styles/App.css */

  #hidden-from-layout {
    display: none;
  }

  #rendered-but-visibility-hidden {
    visibility: hidden;
  }

  #dimmed-section {
    opacity: 20%;
  }
  ```

### Styling

CSS global styles

- [x] CSS reset
- [x] CSS paper size
- [x] `white-space: pre-line` to allow `\n` line breaks

Component styles

- CSS modules
- CSS nesting

  - Supported by Chrome since version 112 (I am using version 114).
  - Supported, but not enabled by default, by Firefox since version 115. Will be supported by default from version 117. (I am using version 115.)

Text formatting

- [x] `react-markdown` to allow formatting in `resume.json` via markdown (rather than HTML with `dangerouslySetInnerHTML`)

Absolute units on mobile

- [ ] How will it render on mobile?
