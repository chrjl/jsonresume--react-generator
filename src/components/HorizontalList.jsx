import PropTypes from 'prop-types';

import * as styles from './HorizontalList.module.css';

function HorizontalList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function HorizontalListLeft({ items }) {
  return (
    <div className={styles.justifyLeft}>
      <HorizontalList items={items} />
    </div>
  );
}

export function HorizontalListRight({ items }) {
  return (
    <div className={styles.justifyRight}>
      <HorizontalList items={items} />
    </div>
  );
}

export function HorizontalListLegacy({ items }) {
  return (
    <div className={styles.legacy}>
      <HorizontalList items={items} />
    </div>
  );
}

HorizontalList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

HorizontalListLeft.propTypes = HorizontalList.propTypes;
HorizontalListRight.propTypes = HorizontalList.propTypes;
HorizontalListLegacy.propTypes = HorizontalList.propTypes;
