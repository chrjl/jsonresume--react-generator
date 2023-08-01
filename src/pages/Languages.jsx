import PropTypes from 'prop-types';

import ReactMarkdown from 'react-markdown';
import DefinitionTable from '../components/DefinitionTable';

function Languages({ data }) {
  const description = data
    .map(({ language, fluency }) =>
      fluency ? `${language} *(${fluency})*` : language
    )
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
  data: PropTypes.arrayOf(PropTypes.string),
};

export default Languages;
