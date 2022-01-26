import React from 'react';
import PropTypes from 'prop-types';

function FilterSelect(props) {
  const { value, handleChange, testId, valuesArray } = props;
  return (
    <select
      data-testid={ testId }
      value={ value }
      onChange={ () => handleChange(value) }
    >
      {valuesArray.map((values, index) => (
        <option key={ index } value={ values }>{ values }</option>
      ))}
    </select>
  );
}

FilterSelect.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  valuesArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterSelect;
