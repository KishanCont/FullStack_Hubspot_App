const hubspot = require("@hubspot/api-client");

import { HUBSPOT_API_KEY, HUBSPOT_APP_ID } from "../constants/index.js";

const hubspotClient = new hubspot.Client({
  developerApiKey: HUBSPOT_API_KEY,
});
const appId = HUBSPOT_APP_ID;

export const webhookPayloadGetProducts = async (req, res) => {
  try {
    const apiResponse = await hubspotClient.crm.products.getAll(
      appId,
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      }
    );
    console.log(JSON.stringify(apiResponse, null, 2));

    res.status(200).send(apiResponse);
  } catch (e) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
  }
};

export const webhookPostPayload = async (req, res) => {
  const SubscriptionCreateRequest = {
    propertyName: "email",
    active: true,
    eventType: "product.creation",
  };

  try {
    const apiResponse = await hubspotClient.webhooks.subscriptionsApi.create(
      appId,
      SubscriptionCreateRequest
    );
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
  }
};
