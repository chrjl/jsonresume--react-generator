import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import HorizontalList from '../components/HorizontalList';
import VerticalCard from '../components/VerticalCard';

function Projects({ data }) {
  return (
    <section id="projects">
      <h3>Portfolio highlights</h3>

      {data.map((project, index) => (
        <VerticalCard
          key={index}
          title={project.name}
          subtitle={<HorizontalList items={project.keywords} />}
          description={
            project.url
              ? [
                  project.description,
                  ...project.url.map((url, index) => (
                    <a key={index} href={url}>
                      {url}
                    </a>
                  )),
                ]
              : project.description
          }
          highlights={project.highlights.map((highlight) => (
            <ReactMarkdown children={highlight} />
          ))}
        />
      ))}
    </section>
  );
}

Projects.propTypes = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    url: PropTypes.arrayOf(PropTypes.string),
    highlights: PropTypes.arrayOf(PropTypes.string),
  })
).isRequired;

export default Projects;
