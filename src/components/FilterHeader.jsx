import React, { useContext } from 'react';
import FilterInput from './FilterInput';
import FilterSelect from './FilterSelect';
import GlobalContext from '../context/GlobalContex';

function FilterHeader() {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
  } = useContext(GlobalContext);

  return (
    <div>
      <FilterSelect
        testId="column-filter"
        value={ column }
        handleChange={ setColumn }
        valuesArray={ ['population', 'orbital_period', 'diameter',
          'rotation_period', 'surface_water'] }
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
      {/* <FilterSelect
        testId="value-filter"
        value={ value }
        handleChange={ () => 0 }
        valuesArray={  }
      /> */}
    </div>

  );
}

export default FilterHeader;
