import submissionController from "@/controller/submission-controller";
import submissionSchema from "@/schemas/submission-schema";
import validate from "@/validations/zod-validator";
import express from "express";

const submissionRouter = express.Router();

submissionRouter
  .route("/")
  .post(validate(submissionSchema), submissionController.createSubmission);

export default submissionRouter;
