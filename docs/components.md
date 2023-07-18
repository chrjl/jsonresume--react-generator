# Components

## Header

- [x] Non-reusable component that depends on specifics of the `basics` section.

## Utility components

Accept "anything that can be rendered" (`PropTypes.node`) as props and format using CSS modules.

- [x] `HorizontalList`: navbar style horizontal list from array of nodes

  ```js
  HorizontalList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
  };
  ```

  **Items:** `<li style="display:inline">` elements

  **Delimiters and spacing:** set by CSS pseudoclass `li::before`

- [x] `VerticalCard`: grid stackable components for multi column layout

  ```js
  VerticalCard.propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node,
    description: PropTypes.node,
    highlights: PropTypes.arrayOf(PropTypes.node),
  };
  ```

  **Heading line:** `<div>` containing a left-aligned title `<span>` and right-aligned subtitle `<span>`. Clearfix to expand the height of the div for alignment of the following elements.

  **Description:** Freeform description `<div>` followed by `<ul>` list of highlights

- [ ] `HorizontalCard`: full-width components for single column layout
- [ ] `DefinitionTable`: keyword `<span>` and list of descriptors `<span>` for tabular layout
