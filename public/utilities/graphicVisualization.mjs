export default (fieldName, list) => {
  const max = Math.max(...list);
  const min = Math.min(...list);

  const levels = list.map(quality => {
    const height = (quality / (max - min)) * 100;
    return `<div title="${quality}" style="height: ${height}px"></div>`
  });

  return `<div class="graphic">
    ${levels.join('')}
    <span class="graphic__title">${fieldName}</span>
  </div>`;
};
