# Styling

## Global styling

- CSS reset (`styles/reset.css`)
- Paper sizing (`styles/paper.css`)

  - Paper width and margins are set by CSS variables, and are easily modified.
  - First page preview marker, via styled `<hr>`, shows the first page bottom margin (to end of first page).

    Inner text is centered using `display:flex`. The preview is prevented from printing via media query.

- Global app stypes (`styles/App.css`)

### Fonts

Default fonts (Arimo, Cousine) are self-hosted. The fonts are installed to the project using the Fontsource project's packages.

Font Awesome React components are used for icons (`react-fontawesome`).

## App styling

Render React (ab)using CSS to force the app into paper size (using border box sizing, and width and padding specified in inches) and present a page that can be printed exactly as seen in browser.

### Component styling

Components use CSS modules with CSS nesting. PostCSS plugin `postcss-nesting` is used to polyfill for browsers that don't support nesting (i.e. Firefox).

> **Note:**
> Native [browser support](https://caniuse.com/css-nesting) for nesting
>
> - Chrome (I am using 114): Supported since version 112
> - Firefox (I am using 115): Supported, but not enabled by default, since version 115 (available behind the `layout.nesting.css.enabled` flag).
>
>   Will be supported by default from version 117.

Overriding styles for specific sections: use the global `App.css` file and override the files using the `id` of the section.

## Text formatting

- [x] `react-markdown`

  Markdown can be parsed and rendered by passing `ReactMarkdown` components into utility components. Markdown is not explicitly implemented in utility components.

  `react-markdown` wraps children in a `<p>` block, which is displayed as block. To display as inline, rewrite the `<p>` block into a `<span>` using the `components` prop.

  ```jsx
  <ReactMarkdown
    children={markdown}
    components={{ p: 'span' }}
  />,
  ```

  > **Note:**
  > Markdown is only accepted in certain detail fields where `react-markdown` has been explicitly implemented.
  >
  > - `projects.highlights`
  > - `languages`
  > - `work.summary`
  > - `experiences.summary` (via `<WorkCard>` component)

- [x] Parse new lines from `\n` in JSON fields (via App CSS)

  `white-space: pre-line`
  : Preserves new lines but collapses spaces and tabs.
