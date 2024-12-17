import executionService from "@services/execution-service";
import { ExecutionConsumer } from "@utils/global-types";

const executionWorker = async (data: ExecutionConsumer) => {
  await executionService.pushExecutionResult(data);
};

export default executionWorker;
