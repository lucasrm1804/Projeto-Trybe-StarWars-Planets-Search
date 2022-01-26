import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContex';
import getApi from '../services/api';

function GlobalProvider({ children }) {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const handelApi = () => {
      getApi()
        .then((response) => setData(response.results));
    };
    handelApi();
  }, []);

  console.log(data);

  return (
    <GlobalContext.Provider
      value={ { data,
        column,
        setColumn,
        comparison,
        setComparison,
        value,
        setValue,
        search,
        setSearch,
        filter,
        setFilter,
      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
