import axios, { AxiosError } from "axios";

import { WS_SERVICE_URL } from "@config/server-config";
import {
  ExecutionConsumer,
  TCreateSubmission,
  TSubmitExecutionJob,
} from "@utils/global-types";
import submissionRepository from "@/repositories/submission-repository";

const createSubmission = async (data: TSubmitExecutionJob) => {
  try {
    const username = data.username;
    const body: TCreateSubmission = {
      problemId: data.problemId,
      langId: data.langId,
      input: data.input,
      output: data.output,
      executionOutput: data.executionOutput,
      status: data.status,
      timestamp: data.timestamp,
      acceptedCount: data.acceptedCount,
      testcaseCount: data.testcaseCount,
    };

    await submissionRepository.createSubmission(username, body);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("Error Creating Submission");
    } else {
      console.log(error);
    }
  }
};

const pushExecutionResult = async (data: ExecutionConsumer) => {
  try {
    const url = `${WS_SERVICE_URL}/api/${data.type}`;
    console.log(data);
    await axios.post(url, data);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("Error to push the execution result");
    } else {
      console.log(error);
    }
  }
};

const executionService = {
  createSubmission,
  pushExecutionResult,
};

export default executionService;
