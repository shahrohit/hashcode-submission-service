import {
  NextFunction as NextFn,
  Request as Req,
  Response as Res,
} from "express";
import { StatusCodes } from "http-status-codes";
import { AxiosError } from "axios";

import BaseError from "@utils/errors";

function errorHandler(err: Error, _: Req, res: Res, __: NextFn) {
  if (err instanceof BaseError) {
    res.status(err.statusCode).json({
      success: false,
      statusCode: err.statusCode,
      name: err.name,
      message: err.message,
    });
    return;
  }

  if (err instanceof AxiosError) {
    const errData = err.response?.data;
    if (errData) {
      res
        .status(errData.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR)
        .json(errData);
      return;
    }
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    name: "INTERNAL_SERVER_ERROR",
    message: "Something Went Wrong",
    data: err,
  });
}

export default errorHandler;
