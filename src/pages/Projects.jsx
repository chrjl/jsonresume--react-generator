import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import { HorizontalListRight as HorizontalList } from '../components/HorizontalList';
import VerticalCard from '../components/VerticalCard';

import * as projects from './Projects.module.css';

export default function Projects({ data }) {
  return (
    <section id="projects">
      <h3>Portfolio highlights</h3>

      <div className={projects.container}>
        {data.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </section>
  );
}

export function ProjectCard(props) {
  const { name, keywords, description, url = [], highlights = [] } = props;

  const descriptionItem = (
    <>
      {url.length > 0 && (
        <div className={projects.url}>
          {url.split(',').map((url, index) => (
            <a key={index} href={url.trim()}>
              {url.trim()}
            </a>
          ))}
        </div>
      )}
      {description && (
        <div className={projects.description}>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      )}
    </>
  );

  return (
    <VerticalCard
      title={name}
      subtitle={keywords && <HorizontalList items={keywords} />}
      description={descriptionItem}
      highlights={highlights.map((highlight, index) => (
        <ReactMarkdown key={index}>{highlight}</ReactMarkdown>
      ))}
    />
  );
}

ProjectCard.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  url: PropTypes.arrayOf(PropTypes.string),
  highlights: PropTypes.arrayOf(PropTypes.string),
});

Projects.propTypes = PropTypes.arrayOf(ProjectCard.propTypes);
