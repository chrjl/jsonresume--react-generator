import PropTypes from 'prop-types';

import * as definitionTable from './DefinitionTable.module.css';

function DefinitionTable(props) {
  const { items } = props;
  return (
    <table className={definitionTable.container}>
      <tbody>
        {items.map(({ term, description }, index) => (
          <DefinitionItem key={index} term={term} description={description} />
        ))}
      </tbody>
    </table>
  );
}

function DefinitionItem(props) {
  const { term, description } = props;
  return (
    <tr>
      <td className={definitionTable.term}>{term}</td>
      <td className={definitionTable.detail}>{description}</td>
    </tr>
  );
}

DefinitionItem.propTypes = {
  term: PropTypes.node,
  description: PropTypes.node,
};

DefinitionTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(DefinitionItem.propTypes)),
};

export default DefinitionTable;
