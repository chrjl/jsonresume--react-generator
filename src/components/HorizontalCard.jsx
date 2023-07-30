import PropTypes from 'prop-types';

import * as horizontalCard from './HorizontalCard.module.css';

function HorizontalCard(props) {
  const { title, subtitle, description, highlights } = props;
  return (
    <div className={horizontalCard.container}>
      <div className={horizontalCard.header}>
        <span className={horizontalCard.title}>{title}</span>
        {subtitle}
      </div>

      <div className={horizontalCard.description}>{description}</div>
      <div className={horizontalCard.highlights}>
        {highlights && (
          <ul>
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

HorizontalCard.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  description: PropTypes.node,
  highlights: PropTypes.arrayOf(PropTypes.node),
};

export default HorizontalCard;
