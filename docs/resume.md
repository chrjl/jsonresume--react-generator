# Resume

## Data sources

The navbar first allows the user to choose the data source (url or file) and saves this choice to state. After data is parsed from JSON, the `resume` object is is stored in state.

- [x] Data is read from URL via the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

  <https://github.com/jsonresume/jsonresume-fake> hosts some sample resumes.

- [x] Data is read from file via the [File API](https://developer.mozilla.org/en-US/docs/Web/API/File_API)

On first load, the app uses an Effect to initialize, fetching `sample.json`.

## Sections

Resume sections are rendered as React Components that uniformly take in `data` prop (array for all sections other than `basics` and `meta`). Typecheck for the fields that are used in rendering.

```jsx
// import resume from "./assets/resume.json";

<Basics data={resume.basics} />
```

Control the visibility of sections, or override styles, using the app global `App.css` with the `id` of the section (see: [[authoring]]).

| Content view      | Resume section                                           |
| ----------------- | -------------------------------------------------------- |
| `Basics`          | Basics                                                   |
| `VerticalCard`    | Portfolio highlights, Education, Certificates, Interests |
| `HorizontalCard`  | Experience, Work                                         |
| `DefinitionTable` | Skills, Languages, Experience items                      |

## Schema mods

- [ ] Projects
- [ ] Experience
