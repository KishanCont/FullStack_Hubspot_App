import { Router } from "express";
import {
  webhookPayloadGetProducts,
  webhookPostPayload,
} from "../controllers/webhook.controller.js";

const webhookRouter = Router();

webhookRouter
  .route(`/webhook`)
  .get(webhookPayloadGetProducts)
  .post(webhookPostPayload);

export default webhookRouter;
