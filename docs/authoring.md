# Authoring

- `prop-types`
  : Define `Component.propTypes`

- `react-markdown`
  : Create `ReactMarkdown` components from strings imported from JSON.

  ```jsx
  // import ReactMarkdown from 'react-markdown';

  <ReactMarkdown children={content} />
  ```

  See `#text-formatting` section in [[formatting]].

## Styling

Hide or dim sections, or override styles, using global css and section id.

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

```css
#skills,
#languages {
  & td:first-child {
    width: 1.5in;
    padding: 0;
  }
}
```
