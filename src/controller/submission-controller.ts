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
import { BadRequest, NotFound } from "@/utils/errors";
import httpStatusCode from "http-status-codes";

const getSubmissions = async (req: Req, res: Res, next: NextFn) => {
  try {
    const username = req.params.username as string | undefined;
    if (!username) throw new NotFound("User Not Found");
    if (!req.params.id) throw new NotFound("Problem Not Found");
    const problemId = +req.params.id;
    if (isNaN(problemId)) throw new NotFound("Problem Not Found");

    const response = await submissionService.getSubmissions(
      username,
      problemId,
    );
    console.log(response);
    res.status(httpStatusCode.OK).json({
      success: true,
      message: "GET",
      statusCode: StatusCodes.OK,
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

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
  getSubmissions,
  createSubmit,
  createRunTestcase,
};

export default submissionController;
