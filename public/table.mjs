/*
        Table Way
*/
export default async ({ appData, sentQualityData, fields }) => {
  const container = document.getElementById('app');

  const sentQualities = sentQualityData.map(({ sentQuality }) => sentQuality);

  const max = Math.max(...sentQualities);
  const min = Math.min(...sentQualities);

  const trs = Object.entries(appData).map(([_, values]) => {
    const tds = fields.map(field => {
      const value = values[field];
      if (field === 'sentQuality' && value) {
        const perc = (value / (max - min)) * 100;
        const isRed = perc < 50;
        const color = isRed ? `rgb(${Math.round((perc * 255) / 49)},0,0)` : `rgb(0,${Math.round((perc * 255) / 100)}, 0)`
        return `<td style="background-color:${color};color:white;">${value}</td>`;
      }
      return `<td>${value}</td>`;
    });
    return `<tr>${tds.join('')}</tr>`
  })

  const options = fields.map(field => `<option value="${field}">${field}</option>`);
  const ths = fields.map(field => `<th>
    <select value="${field}">
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

  container.insertAdjacentHTML('beforeend', table);
};
