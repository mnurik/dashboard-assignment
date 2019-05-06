"use strict";

// document.onreadystatechange(() => {
// IIFE
(async () => {
  const container = document.getElementById('app');

  const resFields = await fetch('/fields')
  const fields = await resFields.json();

  const resAppIds = await fetch('/app')
  const appIds = await resAppIds.json();

  const ths = fields.map(field => `<th>${field}</th>`);
  const thead = `<thead>${ths.join('')}</thead>`;
  const tbody = `<tbody>${}</tbody>`;

  const table = `
                <table>
                  ${thead}
                  ${tbody}
                </table>
          `;

  container.innerHTML = table;

})()
// });
