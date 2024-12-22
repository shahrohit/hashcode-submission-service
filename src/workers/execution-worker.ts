import executionService from "@services/execution-service";
import { ExecutionConsumer } from "@utils/global-types";

const executionWorker = async (data: ExecutionConsumer) => {
  await executionService.pushExecutionResult(data);
  if (data.type === "submit") {
    await executionService.createSubmission(data);
  }
};

export default executionWorker;
