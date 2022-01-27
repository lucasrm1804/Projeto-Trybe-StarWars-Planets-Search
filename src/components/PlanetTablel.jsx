import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContex';

function PlanetTablel() {
  const { data, search, filter } = useContext(GlobalContext);
  const tableTitles = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited',
    'URL'];
  const tableLine = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited',
    'url'];

  const filterData = (planet, searchInput, filterArr) => {
    if (!planet) return [];
    if (searchInput) {
      return planet.filter((name) => name.name.includes(searchInput));
    }
    if (filterArr.length > 0) {
      const arrData = planet;
      if (filterArr[0].comparison === 'maior que') {
        return arrData
          .filter((plan) => plan[filterArr[0].column] > Number(filterArr[0].value));
      } if (filterArr[0].comparison === 'menor que') {
        return arrData
          .filter((plan) => plan[filterArr[0].column] < Number(filterArr[0].value));
      }
      return arrData.filter((plan) => plan[filterArr[0].column] === (filterArr[0].value));
    }
    return planet;
  };

  const filterArray = filterData(data, search, filter);

  return (
    <table>
      <tr>
        {tableTitles.map((title, index) => <th key={ index }>{ title }</th>)}
      </tr>
      <tbody>
        {filterArray.map((planet) => (
          <tr key={ planet.name }>
            {tableLine.map((value, index) => (
              <td key={ `${index}_${value}` }>
                {planet[value]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PlanetTablel;
