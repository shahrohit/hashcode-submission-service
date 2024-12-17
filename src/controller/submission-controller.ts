import {
  NextFunction as NextFn,
  Request as Req,
  Response as Res,
} from "express";
import { StatusCodes } from "http-status-codes";

import { TSubmit } from "@schemas/submit-schema";
import { TRunTestcase } from "@schemas/runtestcase-schema";

import submissionService from "@services/submission-service";
import { CREATED } from "@utils/constants";

const createSubmit = async (req: Req, res: Res, next: NextFn) => {
  try {
    const body = req.body as TSubmit;

    await submissionService.createSubmit(body);

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

const createRunTestcase = async (req: Req, res: Res, next: NextFn) => {
  try {
    const body = req.body as TRunTestcase;

    await submissionService.createRunTestcase(body);

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
  createSubmit,
  createRunTestcase,
};

export default submissionController;
