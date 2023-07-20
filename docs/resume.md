# Resume

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
