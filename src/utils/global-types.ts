export type TExecutionStatus =
  | "Accepted"
  | "Compiled Error"
  | "Wrong Answer"
  | "Error"
  | "TLE"
  | "RTE";

export type TExecutionJob = {
  id: string;
  input?: string;
  output?: string;
  executionOutput: string;
  status: TExecutionStatus;
  acceptedCount?: number;
  timestamp: string;
};
