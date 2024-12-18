import express from "express";

import validate from "@validations/zod-validator";
import runTestcaseSchema from "@schemas/runtestcase-schema";
import submitSchema from "@schemas/submit-schema";

import submissionController from "@controller/submission-controller";

const submissionRouter = express.Router();

submissionRouter
  .route("/:username/:id")
  .get(submissionController.getSubmissions);

submissionRouter
  .route("/submit")
  .post(validate(submitSchema), submissionController.createSubmit);

submissionRouter
  .route("/run")
  .post(validate(runTestcaseSchema), submissionController.createRunTestcase);

export default submissionRouter;
