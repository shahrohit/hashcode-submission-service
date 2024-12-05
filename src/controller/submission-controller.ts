import {
  NextFunction as NextFn,
  Request as Req,
  Response as Res,
} from "express";
import { StatusCodes } from "http-status-codes";

import submissionService from "@services/submission-service";
import { CREATED } from "@/utils/strings";
import { TSubmissionJob } from "@/schemas/submission-schema";

const createSubmission = async (req: Req, res: Res, next: NextFn) => {
  try {
    const body = req.body as TSubmissionJob;

    await submissionService.createSubmission(body);

    res.status(StatusCodes.CREATED).json({
      succcess: true,
      statusCode: StatusCodes.CREATED,
      message: CREATED,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};

const submissionController = {
  createSubmission,
};

export default submissionController;
