import { CRMCardData } from "../constants/crm.card.response.js";
import { getRecords } from "../utils/index.js";

export const CRMCardDataFetch = async (req, res) => {
  try {
    const { associatedObjectId } = req.query;

    const record = await getRecords(associatedObjectId);

    // await saveTestData(record);

    return res.status(200).json(CRMCardData);
    // return res.status(200).json({ record });
  } catch (error) {
    console.log(error.message);
  }
};

async function updateRecords(dealId, accessToken) {
  const getLineItems = `https://api.hubapi.com/crm/v3/objects/line_items?associations.deals=${dealId}`;
  try {
    const response = await axios.post(getLineItems, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
}
