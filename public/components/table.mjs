import qualityVisualize from '../utilities/coloredVisalization.mjs';

/*
        Table Way
*/
const tableView = async (props) => {
  const { appData, fields, listData } = props;
  const container = document.getElementById('app');

  const qualityVisualizedList = Object.entries(listData).reduce((acc, [key, value]) => {
    acc[key] = qualityVisualize(value); // With help of Closure create object of functions
    return acc;
  }, {});

  const trs = appData.map(values => {
    const tds = fields.map(field => {
      const value = values[field];
      if (listData[field] && value) return qualityVisualizedList[field](value)
      else return `<td>${value}</td>`;
    });
    return `<tr>${tds.join('')}</tr>`
  })

  const options = fields.map(field => `<option value="${field}">${field}</option>`);

  const ths = fields.map((field, index) => `<th>
    <select value="${field}" data-index="${index}">
      ${options.join('').replace(`<option value="${field}">${field}</option>`, `<option value="${field}" selected>${field}</option>`)}
    </select>
  </th>`);

  const thead = `<thead>${ths.join('')}</thead>`;

  const tbody = `<tbody>${trs.join('')}</tbody>`;

  const table = `
    <table>
      ${thead}
      ${tbody}
    </table>
  `;

  container.innerHTML = table;

  // Table headers are changeable.
  document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', e => {
      const index = +e.target.dataset.index;
      const value = e.target.value;
      const newFields = [...fields.slice(0, index), value, ...fields.slice(index + 1)];
      tableView({ ...props, fields: newFields });
    })
  })
};

export default tableView;
