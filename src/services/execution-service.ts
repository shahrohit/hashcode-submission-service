import { ADMIN_SERVICE_URL, WS_SERVICE_URL } from "@/config/server-config";
import fetchData from "@/controller/request-controller";
import submissionProducer from "@/producer/submission-producer";
import { Testcase, TSubmission } from "@/schemas/submission-schema";
import { NotFound } from "@/utils/errors"; 
import { TExecutionJob } from "@/utils/global-types";
import axios from "axios";

const pushExecutionResult = async (data: TExecutionJob) => {
  try {
    const url = `${WS_SERVICE_URL}/api/submission`;
    const res = await axios.post(url, data);
    console.log(res.data);
  } catch (error) {
    console.log("Error in push execution");
    console.log(error);
  }
};

const executionService = {
  pushExecutionResult,
};

export default executionService;
