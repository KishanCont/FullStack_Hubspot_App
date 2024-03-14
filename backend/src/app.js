import express from "express";
import cors from "cors";
import installRouter from "./routes/install.route.js";
import crmCardRouter from "./routes/crm.card.route.js";
import webhookRouter from "./routes/webhook.route.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/", installRouter);
app.use("/", crmCardRouter);
app.use("/", webhookRouter);

export default app;
