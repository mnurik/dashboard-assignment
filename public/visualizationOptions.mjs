import graphic from './graphic.mjs';
import table from './table.mjs';

// IIFE
export default ({ appIdSelector, ...rest }) => {
  const views = { graphic, table };

  const container = document.getElementById('app');

  document.querySelectorAll('input[type=radio]').forEach(element => {
    element.removeEventListener('change', () => { });
  });

  const visualizationOptions = `
    <div id="visualization">
      <input type="radio" name="visualization" value="graphic">Graphic<br>
      <input type="radio" name="visualization" value="table">Table
    </div>
  `;
  container.innerHTML = visualizationOptions;

  document.querySelectorAll('input[type=radio]').forEach(element => {
    element.addEventListener('change', (event) => {
      views[event.target.value](rest);
    }, false);
  });
};
