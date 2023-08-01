# UI Components

## NavBar

The `<NavBar>` component is used to control data sources and set the `resume` state variable.

Internally, the `<DataSourcePicker>` component first allows the user to choose the data source type (url or file), then uses `<input>` elements to either fetch (url source) or read (file source) a JSON object. After parsing, the `resume` object is is stored in state.

## SideBar

The `<SideBar>` component is used to control what is rendered by setting the `showSection` state variable.

Internally, a set of checkbox `<input>` elements is used, one for each section.
