import PropTypes from 'prop-types';

import DefinitionTable from './DefinitionTable';

function Skills({ data }) {
  return (
    <section id="skills">
      <DefinitionTable
        items={data.map(({ name, keywords }) => ({
          term: name,
          description: keywords.join(', '),
        }))}
      />
    </section>
  );
}

Skills.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      keywords: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

export default Skills;
