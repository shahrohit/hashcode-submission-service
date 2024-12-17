import axios, { AxiosError } from "axios";

import { WS_SERVICE_URL } from "@config/server-config";
import { ExecutionConsumer } from "@utils/global-types";

const pushExecutionResult = async (data: ExecutionConsumer) => {
  try {
    const url = `${WS_SERVICE_URL}/api/${data.type}`;
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
  pushExecutionResult,
};

export default executionService;
