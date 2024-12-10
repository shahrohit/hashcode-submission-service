import {
  NextFunction as NextFn,
  Request as Req,
  Response as Res,
} from "express";
import axios from "axios";

const fetchData = async (SERVICE_URL: string, originalUrl: string) => {
  try {
    const url = `${SERVICE_URL}${originalUrl}`;
    const response = await axios.get(url);
    return response.data.data;
  } catch {
    return null;
  }
};

export default fetchData;
