import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './GlobalContex';
import getApi from '../services/api';

function GlobalProvider({ children }) {
  const [data, setData] = useState([]);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');

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
