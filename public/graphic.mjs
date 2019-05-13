
/*
        Graphical Way
*/
export default async (data) => {
  const { sentQualityData } = await data;
  const container = document.getElementById('app');

  const sentQualities = sentQualityData.map(({ sentQuality }) => sentQuality);

  const max = Math.max(...sentQualities);
  const min = Math.min(...sentQualities);

  const levels = sentQualities.map(quality => {
    const height = (quality / (max - min)) * 100;
    return `<div title="${quality}" style="height: ${height}px"></div>`
  });

  const graphic = `<div class="graphic">${levels.join('')}</div>`;

  container.insertAdjacentHTML("beforeend", graphic);
};
