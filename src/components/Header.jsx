import React, { useContext } from 'react';
import FilterHeader from './FilterHeader';
import GlobalContext from '../context/GlobalContex';

function Header() {
  const { search, setSearch } = useContext(GlobalContext);
  return (
    <div>
      <h1>Projeto Star Wars Trybe</h1>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (event) => setSearch(event.target.value) }
        value={ search }
      />
      <FilterHeader />
    </div>
  );
}

export default Header;
