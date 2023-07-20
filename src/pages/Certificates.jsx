import PropTypes from 'prop-types';
import HorizontalList from '../components/HorizontalList';
import VerticalCard from '../components/VerticalCard';

function Certificates({ data }) {
  return (
    <section id="certificates">
      <h3>Certificates</h3>

      {data.map(({ name, date, issuer, url }, index) => (
        <VerticalCard
          key={index}
          title={name}
          description={[
            <HorizontalList key="details" items={[issuer, date]} />,
            <a key="link" href={url}>{url}</a>,
          ]}
        />
      ))}
    </section>
  );
}

Certificates.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.string,
      issuer: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default Certificates;
