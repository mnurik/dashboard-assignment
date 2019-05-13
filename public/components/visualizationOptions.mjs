import graphic from './graphic.mjs';
import table from './table.mjs';

// IIFE for Closure
export default (() => {
  const views = { graphic, table };
  let fn;

  return ({ appIdSelector, ...rest }) => {

    if (!document.getElementById('visualization')) {

      // I think I worked too much with jsx :)
      const visualizationOptions = `
        <div id="visualization">
          <input type="radio" name="visualization" value="graphic">Graphic<br>
          <input type="radio" name="visualization" value="table">Table
        </div>
      `;
      appIdSelector.insertAdjacentHTML("afterend", visualizationOptions); // Add radio buttons after dropdown.

      document.querySelectorAll('input[type=radio]').forEach(element => {
        element.addEventListener('change', (event) => {
          fn = views[event.target.value]; // Define which way to show.
          fn(rest);
        }, false);
      });

    } else fn && fn(rest); // If appId changed show same way with new content
  }
})();
