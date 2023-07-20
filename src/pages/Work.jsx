import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import HorizontalCard from '../components/HorizontalCard';
import HorizontalList from '../components/HorizontalList';

function Work({ data }) {
  return (
    <section id="work">
      <h3>Work</h3>
      {data.map((workItem, index) => (
        <WorkCard key={index} {...workItem} />
      ))}
    </section>
  );
}

function WorkCard(props) {
  const {
    position,
    name,
    location,
    department,
    summary,
    highlights,
    startDate,
    endDate,
  } = props;

  const subtitleItems = {
    companyInfo: name && (
      <>
        {name} {location && <em>({location})</em>}
      </>
    ),
    department,
    dates: (startDate && `${startDate} to `) + endDate,
  };

  const subtitle = (
    <HorizontalList
      items={[
        subtitleItems.companyInfo,
        subtitleItems.department,
        subtitleItems.dates,
      ].filter((detail) => detail !== undefined)}
    />
  );

  const description = <ReactMarkdown children={summary} />;

  return (
    <HorizontalCard
      title={position}
      subtitle={subtitle}
      description={description}
      highlights={highlights}
    />
  );
}

WorkCard.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  department: PropTypes.string,
  position: PropTypes.string.isRequired,
  url: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  summary: PropTypes.string,
  highlights: PropTypes.arrayOf(PropTypes.string),
};

Work.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(WorkCard.propTypes)),
};

export { WorkCard };
export default Work;
