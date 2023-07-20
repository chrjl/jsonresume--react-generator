import PropTypes from 'prop-types';

import VerticalCard from '../components/VerticalCard';
import HorizontalList from '../components/HorizontalList';

function Education({ data }) {
  return (
    <section id="education">
      <h3>Education</h3>

      {data.map(({ institution, studyType, endDate, area }, index) => (
        <VerticalCard
          key={index}
          title={institution}
          description={
            <HorizontalList items={[`${studyType} (${endDate})`, area]} />
          }
        />
      ))}
    </section>
  );
}

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      institution: PropTypes.string,
      studyType: PropTypes.string,
      endDate: PropTypes.string,
      area: PropTypes.string,
    })
  ),
};

export default Education;
