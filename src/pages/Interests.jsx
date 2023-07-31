import PropTypes from 'prop-types';
import VerticalCard from '../components/VerticalCard';

function Interests({ data }) {
  return (
    <section id="interests">
      <h3>Interests</h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridRowGap: '1em',
        }}
      >
        {data.map(({ name, keywords }, index) => (
          <VerticalCard key={index} title={name} highlights={keywords} />
        ))}
      </div>
    </section>
  );
}

Interests.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      keywords: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default Interests;
