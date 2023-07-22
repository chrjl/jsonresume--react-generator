# Components for rendering

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

  **Heading line:** Left-aligned title and right-aligned subtitle `<span>`s in a container `<div>`. Clearfix to prevent collapsing of the container element (expand to contain child elements).

  **Description:** Freeform description `<div>` followed by `<ul>` list of highlights

- [x] `HorizontalCard`: full-width components for single column layout

  ```js
  HorizontalCard.propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node,
    description: PropTypes.node,
    highlights: PropTypes.arrayOf(PropTypes.node),
  };
  ```

  **Heading line:** Title and subtitle `<span>`s.

  **Description:** Freeform description `<div>` followed by `<ul>` list of highlights

- [x] `DefinitionTable`: two-column table

  ```js
  DefinitionItem.propTypes = {
    term: PropTypes.node,
    description: PropTypes.node,
  };

  DefinitionTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(DefinitionItem.propTypes)),
  };
  ```
