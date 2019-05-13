import qualityVisualize from './quality.mjs';

/*
        Table Way
*/
const tableView = async ({ appData, fields }) => {
  const container = document.getElementById('app');

  const sentQuality = appData.map(({ sentQuality }) => sentQuality);
  const recvQuality = appData.map(({ recvQuality }) => recvQuality);
  const senderLongitude = appData.map(({ senderLongitude }) => senderLongitude);
  const senderLatitude = appData.map(({ senderLatitude }) => senderLatitude);
  const recvLongitude = appData.map(({ recvLongitude }) => recvLongitude);
  const recvLatitude = appData.map(({ recvLatitude }) => recvLatitude);
  const recvAs = appData.map(({ recvAs }) => recvAs);
  const meanSendingRateKbps = appData.map(({ meanSendingRateKbps }) => meanSendingRateKbps);
  const meanSentFrameHeight = appData.map(({ meanSentFrameHeight }) => meanSentFrameHeight);
  const meanSentFrameWidth = appData.map(({ meanSentFrameWidth }) => meanSentFrameWidth);
  const medianSentFrameHeight = appData.map(({ medianSentFrameHeight }) => medianSentFrameHeight);
  const medianSentFrameWidth = appData.map(({ medianSentFrameWidth }) => medianSentFrameWidth);

  const listData = {
    'sentQuality': qualityVisualize(sentQuality),
    'recvQuality': qualityVisualize(recvQuality),
    'senderLongitude': qualityVisualize(senderLongitude),
    'senderLatitude': qualityVisualize(senderLatitude),
    'recvLongitude': qualityVisualize(recvLongitude),
    'recvLatitude': qualityVisualize(recvLatitude),
    'recvAs': qualityVisualize(recvAs),
    'meanSendingRateKbps': qualityVisualize(meanSendingRateKbps),
    'meanSentFrameHeight': qualityVisualize(meanSentFrameHeight),
    'meanSentFrameWidth': qualityVisualize(meanSentFrameWidth),
    'medianSentFrameHeight': qualityVisualize(medianSentFrameHeight),
    'medianSentFrameWidth': qualityVisualize(medianSentFrameWidth),
  }

  const trs = appData.map(values => {
    const tds = fields.map(field => {
      const value = values[field];
      if (listData[field] && value) return listData[field](value)
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

  document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', e => {
      const index = +e.target.dataset.index;
      const value = e.target.value;
      const newFields = [...fields.slice(0, index), value, ...fields.slice(index + 1)];
      tableView({ appData, fields: newFields });
    })
  })
};

export default tableView;
