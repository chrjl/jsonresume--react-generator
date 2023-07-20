import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import HorizontalList from '../components/HorizontalList';
import VerticalCard from '../components/VerticalCard';

import * as projects from './Projects.module.css';

function Projects({ data }) {
  return (
    <section id="projects">
      <h3>Portfolio highlights</h3>

      {data.map(
        ({ name, keywords, description, url = [], highlights = [] }, index) => (
          <VerticalCard
            key={index}
            title={name}
            subtitle={<HorizontalList items={keywords} />}
            description={
              <>
                {url && (
                  <div className={projects.url}>
                    {url.split(',').map((url, index) => (
                      <a key={index} href={url.trim()}>
                        {url.trim()}
                      </a>
                    ))}
                  </div>
                )}
                {description && (
                  <div className={projects.description}>{description}</div>
                )}
              </>
            }
            highlights={highlights.map((highlight) => (
              <ReactMarkdown children={highlight} />
            ))}
          />
        )
      )}
    </section>
  );
}

Projects.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    url: PropTypes.arrayOf(PropTypes.string),
    highlights: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export default Projects;
