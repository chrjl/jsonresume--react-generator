# Build

## Exports

|         | Version                  | Size  | Notes                                                                     |
| :-----: | ------------------------ | ----- | ------------------------------------------------------------------------- |
|         | 0.1.0                    | 274 K |                                                                           |
| &check; | 0.1.0-dev-fa             | 343 K | Added: Font Awesome React components for icons                            |
|         | 0.1.0-dev-arimo          | 414 K | Added: @fontsource/arimo; import only latin variants                      |
| &cross; | 0.1.0-dev-arimo-variable | 525 K | Added: @fontsource-variable/arimo                                         |
| &check; | 0.1.0-dev-fonts          | 474 K | Added: @fontsource/arimo, @fontsource/cousine; import only latin variants |
|         | 0.2.0                    | 512 K | Added: SideBar section picker component                                   |

Notes:

- Using `react-fontawesome` increased build by 60K.

  Previously hosted `.svg` as a public asset (<1 K) and used it in the app as an `<img>` component.

- Self host font using fontsource package, importing variant-specific CSS rules.

## Authoring

- `prop-types`
  : Define `Component.propTypes`

- `react-markdown`
  : Create `ReactMarkdown` components from strings imported from JSON.

  ```jsx
  // import ReactMarkdown from 'react-markdown';

  <ReactMarkdown children={content} />
  ```

  See `#text-formatting` section in [[styling]].
