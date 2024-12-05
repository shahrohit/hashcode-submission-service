import express from "express";
import submissionRouter from "./submission-route";

const apiRouter = express.Router();

apiRouter.use("/submissions", submissionRouter);

export default apiRouter;
