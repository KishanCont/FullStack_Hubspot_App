import { Router } from "express";
import { CRMCardDataFetch } from "../controllers/crm.card.controller.js";

const crmCardRouter = Router();

crmCardRouter.route("/fetchurl").get(CRMCardDataFetch);

export default crmCardRouter;
