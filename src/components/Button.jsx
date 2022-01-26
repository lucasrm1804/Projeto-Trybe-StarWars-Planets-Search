import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContex';

function Button() {
  const {
    column,
    comparison,
    value,
    filter,
    setFilter,
  } = useContext(GlobalContext);

  const filterArray = () => {
    const newFilter = {
      column,
      comparison,
      value,
    };
    const arrayfilter = [...filter, newFilter];
    setFilter(arrayfilter);
  };

  console.log(filter);
  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ () => filterArray() }
    >
      Filtrar
    </button>
  );
}

export default Button;
