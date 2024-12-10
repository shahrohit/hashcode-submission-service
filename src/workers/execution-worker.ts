import executionService from "@/services/execution-service";
import { TExecutionJob } from "@utils/global-types";

const executionWorker = async (data: TExecutionJob) => {
  await executionService.pushExecutionResult(data);
};

export default executionWorker;
