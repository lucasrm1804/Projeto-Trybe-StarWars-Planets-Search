import React, { useContext } from 'react';
import FilterInput from './FilterInput';
import FilterSelect from './FilterSelect';
import GlobalContext from '../context/GlobalContex';
import Button from './Button';

function FilterHeader() {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filter,
  } = useContext(GlobalContext);
  const valuesArr = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];

  function filterColumn(data) {
    return valuesArr.reduce((acc, curr) => {
      if (data.every((value2) => value2.column !== curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);
  }

  return (
    <div>
      <FilterSelect
        testId="column-filter"
        value={ column }
        handleChange={ setColumn }
        valuesArray={ filterColumn(filter) }
      />
      <FilterSelect
        testId="comparison-filter"
        value={ comparison }
        handleChange={ setComparison }
        valuesArray={ ['maior que', 'menor que', 'igual a'] }
      />
      <FilterInput
        value={ value }
        handleChange={ setValue }
      />
      <Button />
    </div>

  );
}

export default FilterHeader;
