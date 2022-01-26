import React from 'react';
import PropTypes from 'prop-types';

function FilterInput(props) {
  const { value, handleChange } = props;
  return (
    <input
      type="number"
      data-testid="value-filter"
      value={ value }
      onChange={ (event) => handleChange(event.target.value) }
    />
  );
}

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FilterInput;
