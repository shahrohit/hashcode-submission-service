export type TExecutionStatus =
  | "Accepted"
  | "Compiled Error"
  | "Wrong Answer"
  | "Error"
  | "TLE"
  | "RTE";

export type TExecutionJob = {
  input?: string;
  output?: string;
  executionOutput: string;
  status: TExecutionStatus;
  acceptedCount?: number;
};
