import express from "express";
import bodyParser from "body-parser";

import apiRouter from "@routes/index";
import errorHandler from "@middlewares/errorHandler";
import { PORT } from "@config/server-config";
import connectQueue from "@config/queue-config";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectQueue();
});
