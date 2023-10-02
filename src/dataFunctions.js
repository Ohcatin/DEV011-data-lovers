export const filterData = (data, filterBy, value) => {
  const filteredData = data.films.filter((film)=> film[filterBy]=== value);
  return filteredData;
};

export const anotherExample = () => {
  return [];
};
import { renderItems } from './view.js';
//recibe los datos y los ordena según los parámetros especificados
export const sortData = (data, sortBy, sortOrder) => {
  console.log('Antes de ordenar:', data);
  console.log(sortBy, sortOrder);
  const compare = (a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else if (sortOrder === 'desc') {
      return b[sortBy] > a[sortBy] ? 1 : -1;
    }
  };
  data.sort(compare);
  console.log('Después de ordenar:', data);

  renderItems(data);
  return data;
}

