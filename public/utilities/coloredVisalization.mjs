export default (list) => {
  const max = Math.max(...list);
  const min = Math.min(...list);

  return value => {
    const perc = (value / (max - min)) * 100;
    const isRed = perc < 50;
    const color = isRed ? `rgb(${Math.round((perc * 255) / 49)},0,0)` : `rgb(0,${Math.round((perc * 255) / 100)}, 0)`
    return `<td style="background-color:${color};color:white;">${value}</td>`;
  }
};
