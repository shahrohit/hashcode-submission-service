import express from "express";

import submissionRouter from "@routes/submission-route";

const apiRouter = express.Router();

apiRouter.use("/submissions", submissionRouter);

export default apiRouter;
