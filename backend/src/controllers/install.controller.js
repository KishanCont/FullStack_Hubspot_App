import {
  exchangeAuthorizationCodeForTokens,
  getAccessToken,
  getAccountInfo,
} from "../utils/index.js";
import { createDatabase, saveRefreshTokenToMongo } from "./table.controller.js";

export const OAuthCallback = async (req, res) => {
  // Extract the authorization code from the query parameters
  const authorizationCode = req.query.code;
  if (authorizationCode) {
    try {
      const tokens = await exchangeAuthorizationCodeForTokens(
        authorizationCode
      );
      const refreshToken = tokens.refresh_token;
      const accessToken = (await getAccessToken(refreshToken)).access_token;
      // Use the access token to make requests to the HubSpot API
      const accountInfo = await getAccountInfo(accessToken);
      console.log(accountInfo);
      // Extract organization name and ID from the accountInfo
      const orgName = accountInfo.accountType;
      const orgId = accountInfo.portalId;
      // You can save or use the orgName and orgId as needed
      console.log("Organization Name:", orgName);
      console.log("Organization ID:", orgId);

      await saveRefreshTokenToMongo(refreshToken, orgId);
      await createDatabase(orgId);

      return res.redirect("/success");
    } catch (error) {
      console.log(error);
    }
  }
};
