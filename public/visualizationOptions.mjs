import graphic from './graphic.mjs';
import table from './table.mjs';

// IIFE for Closure
export default (() => {
  const views = { graphic, table };
  let fn;
  return ({ appIdSelector, ...rest }) => {
    if (!document.getElementById('visualization')) {
      const visualizationOptions = `
        <div id="visualization">
          <input type="radio" name="visualization" value="graphic">Graphic<br>
          <input type="radio" name="visualization" value="table">Table
        </div>
      `;
      appIdSelector.insertAdjacentHTML("afterend", visualizationOptions);
    
      document.querySelectorAll('input[type=radio]').forEach(element => {
        element.addEventListener('change', (event) => {
          fn = views[event.target.value];
          fn(rest);
        }, false);
      });
    } else fn(rest);
  }
})();
