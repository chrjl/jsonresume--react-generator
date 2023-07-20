import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import DefinitionTable from '../components/DefinitionTable';

function Languages({ data }) {
  const description = data
    .map(({ language, fluency }) => `${language} *(${fluency})*`)
    .join(', ');

  return (
    <section id="languages">
      <DefinitionTable
        items={[
          {
            term: 'languages',
            description: <ReactMarkdown children={description} />,
          },
        ]}
      />
    </section>
  );
}

Languages.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default Languages;
