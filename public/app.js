"use strict";

import visualizationOptions from './visualizationOptions.mjs';

// IIFE
(async () => {
  const appIdSelector = document.getElementById("appIdsSelect");

  const resAppIds = await fetch('/app');
  const appIds = await resAppIds.json();

  const fieldsRes = await fetch('/fields');
  const fields = await fieldsRes.json();

  const options = appIds.map(({ appID }) => `<option>${appID}</option>`);
  appIdSelector.insertAdjacentHTML("beforeend", options.join(""));

  appIdSelector
    .addEventListener('change', async ({ target: { value: appId } }) => {
      const appDataRes = await fetch(`/app/${appId}`);
      const appData = await appDataRes.json();

      const sentQualityDataRes = await fetch(`/app/${appId}/sentQuality`);
      const sentQualityData = await sentQualityDataRes.json();

      visualizationOptions({ appIdSelector, appData, sentQualityData, fields });
    }, false);
})();
