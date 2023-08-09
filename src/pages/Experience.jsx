import { Fragment } from 'react';
import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import DefinitionTable from '../components/DefinitionTable';
import { WorkCard } from './Work';
import { ProjectCard } from './Projects';

import * as styles from './Experience.module.css';

function Experience({ data }) {
  return (
    <section id="experience">
      <h3>Experience</h3>
      {data.map(({ categories, projects, ...workItem }, index) => (
        <Fragment key={index}>
          <WorkCard {...workItem} />
          {categories && (
            <div className={styles.categories}>
              <CategoricalDetails categories={categories} />
            </div>
          )}
          {projects && (
            <div className={styles.projects}>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </section>
  );
}

function CategoricalDetails({ categories }) {
  return (
    <DefinitionTable
      items={categories.map(({ name, keywords }) => ({
        term: name,
        description: <ReactMarkdown children={keywords.join('\n')} />,
      }))}
    />
  );
}

CategoricalDetails.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

Experience.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      ...WorkCard.propTypes,
      ...CategoricalDetails.propTypes,
    })
  ),
};

export default Experience;
