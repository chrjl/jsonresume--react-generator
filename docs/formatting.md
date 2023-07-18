# Resume formatting

## Styling

### Global styling

- CSS reset (`styles/reset.css`)
- Paper sizing (`styles/paper.css`)
- Global app stypes (`styles/App.css`).

### Component styling

Components use CSS modules with CSS nesting.

> **Note:**
> [CSS nesting browser support](https://caniuse.com/css-nesting)
>
> - Chrome (I am using 114): Supported since version 112
> - Firefox (I am using 115): Supported, but not enabled by default, since version 115 (available behind the `layout.nesting.css.enabled` flag).
> 
>     Will be supported by default from version 117.



## Text formatting

- [x] `react-markdown`

Markdown can be parsed and rendered by passing `ReactMarkdown` components into utility components. Markdown is not explicitly implemented in utility components.

> **Note:**
> Markdown is only accepted in certain detail fields where `react-markdown` has been explicitly implemented.
>
> - `projects.highlights`

- [x] Parse new lines from `\n` in JSON fields (via CSS global root)

  `white-space: pre-line`
  : Preserves new lines but collapses spaces and tabs.

