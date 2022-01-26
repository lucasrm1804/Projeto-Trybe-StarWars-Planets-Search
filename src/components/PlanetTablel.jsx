import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContex';

function PlanetTablel() {
  const { data, search } = useContext(GlobalContext);
  const tableTitles = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited',
    'URL'];
  const tableLine = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited',
    'url'];

  const filterData = (planet, searchInput) => {
    if (!planet) return [];
    if (search) {
      return planet.filter((name) => name.name.includes(searchInput));
    }
    return planet;
  };

  const filterArray = filterData(data, search);

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
