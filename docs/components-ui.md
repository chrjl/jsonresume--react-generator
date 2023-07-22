# UI Components

## NavBar

The navbar is used to control what is being rendered.

- Data source: url or file
- Section visibility

  - [ ] Display
  - [ ] Dimming
  - [ ] Filtering: show all/ hide items marked as hidden

### Data sources

The navbar first allows the user to choose the data source (url or file) and saves this choice to state. After data is parsed from JSON, the `resume` object is is stored in state.

- [x] Data is read from URL via the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

  <https://github.com/jsonresume/jsonresume-fake> hosts some sample resumes.

- [x] Data is read from file via the [File API](https://developer.mozilla.org/en-US/docs/Web/API/File_API)
