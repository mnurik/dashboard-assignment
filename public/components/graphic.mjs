import qualityVisualize from "./../utilities/graphicVisualization.mjs";
/*
        Graphical Way
*/
export default async ({ listData }) => {
  const container = document.getElementById('app');

  const graphics = Object.entries(listData).map(([fieldName, values]) => qualityVisualize(fieldName, values));

  container.innerHTML = graphics.join("");
};
