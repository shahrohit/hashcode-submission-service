import express from "express";
import bodyParser from "body-parser";

import { PORT } from "@config/server-config";
import connectQueue from "@config/queue-config";

import apiRouter from "@routes/index";
import errorHandler from "@middlewares/error-handler";
import checkHealth from "./controller/health-controller";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);
app.get("/health", checkHealth);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectQueue();
});
