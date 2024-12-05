import { TExecutionJob } from "@utils/global-types";

const executionWorker = async (data: TExecutionJob) => {
  console.log(data);
};

export default executionWorker;
