"use strict";

// IIFE for data fetch
const data = (async () => {
  const resFields = await fetch('/fields')
  const fields = await resFields.json();

  const resAppIds = await fetch('/app')
  const appIds = await resAppIds.json();

  const resAppId = await fetch('/app/100697065')
  const appId = await resAppId.json();

  const resAppId1SentQuality = await fetch('/app/100697065/sentQuality')
  const appId1SentQuality = await resAppId1SentQuality.json();

  return { fields, appIds, appId, appId1SentQuality };
})();

/*
        Table Way
*/
(async (data) => {
  const { fields, appId, appId1SentQuality } = await data;
  const container = document.getElementById('app');

  const sentQualities = appId1SentQuality.map(({ sentQuality }) => sentQuality);

  const max = Math.max(...sentQualities);
  const min = Math.min(...sentQualities);

  const trs = Object.entries(appId).map(([_, values]) => {
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

  container.insertAdjacentHTML('afterend', table);
})(data);

/*
        Graphical Way
*/
(async (data) => {
  const { appId1SentQuality } = await data;
  const container = document.getElementById('app2');

  const sentQualities = appId1SentQuality.map(({ sentQuality }) => sentQuality);

  const max = Math.max(...sentQualities);
  const min = Math.min(...sentQualities);

  const levels = sentQualities.map(quality => {
    const height = (quality / (max - min)) * 100;
    return `<div title="${quality}" style="height: ${height}px"></div>`
  });

  const graphic = `<div class="graphic">${levels.join('')}</div>`;

  container.insertAdjacentHTML('afterend', graphic);
})(data);
