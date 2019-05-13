"use strict";

import visualizationOptions from './components/visualizationOptions.mjs';
import getListData from './utilities/getListData.mjs';

// IIFE
(async () => {
  const appIdSelector = document.getElementById("appIdsSelect");

  const resAppIds = await fetch('/app');
  const appIds = await resAppIds.json();

  const options = appIds.map(({ appID }) => `<option>${appID}</option>`);
  appIdSelector.insertAdjacentHTML("beforeend", options.join(""));

  const fieldsRes = await fetch('/fields');
  const fields = await fieldsRes.json();

  appIdSelector
    .addEventListener('change', async ({ target: { value: appId } }) => {
      const appDataRes = await fetch(`/app/${appId}`);
      const appData = await appDataRes.json();

      const sentQualityDataRes = await fetch(`/app/${appId}/sentQuality`);
      const sentQualityData = await sentQualityDataRes.json();

      const listData = getListData(appData);

      visualizationOptions({ appIdSelector, appData, sentQualityData, fields, listData });
    }, false);
})();
