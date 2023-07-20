import PropTypes from 'prop-types';

import * as verticalCard from './VerticalCard.module.css';

function VerticalCard(props) {
  const { title, subtitle, description, highlights = [] } = props;
  return (
    <div className={verticalCard.container}>
      <div className={verticalCard.heading}>
        <span className={verticalCard.title}>{title}</span>
        {subtitle && <span className={verticalCard.subtitle}>{subtitle}</span>}
      </div>

      <div className={verticalCard.description}>{description}</div>
      {highlights.length > 0 && (
        <div className={verticalCard.highlights}>
          <ul>
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

VerticalCard.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  description: PropTypes.node,
  highlights: PropTypes.arrayOf(PropTypes.node),
};

export default VerticalCard;
