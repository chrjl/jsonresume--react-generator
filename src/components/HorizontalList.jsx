import PropTypes from 'prop-types';

import * as horizontalList from './HorizontalList.module.css';

function HorizontalList(props) {
  const { items = [] } = props;

  return (
    <span className={horizontalList.container}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </span>
  );
}

HorizontalList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default HorizontalList;
