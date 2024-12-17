import { TRunProducerJob } from "@schemas/runtestcase-schema";
import { TSubmitProducerJob } from "@schemas/submit-schema";

export type TProblemSubmit = {
  id: number;
  language: string;
  code: string;
  testcases: {
    input: string;
    output: string;
  }[];
  timeLimit: number;
};
export type TProblemRun = {
  id: number;
  language: string;
  code: string;
  solutionCode: string;
  timeLimit: number;
};

export type SubmissionProducer = TSubmitProducerJob | TRunProducerJob;

export type TExecutionStatus =
  | "Accepted"
  | "Compiled Error"
  | "Wrong Answer"
  | "Error"
  | "TLE"
  | "RTE";

export type TSubmitExecutionJob = {
  type: "submit";
  username: string;
  problemId: number;
  problemSlug: string;
  socketKey: string | null;
  input?: string;
  output?: string;
  executionOutput: string;
  status: TExecutionStatus;
  acceptedCount?: number;
  testcaseCount: number;
  language: string;
  timestamp: string;
};

export type TRunExecutionJob = {
  type: "run";
  username: string;
  problemId: number;
  problemSlug: string;
  socketKey: string | null;
  testcaseCount: number;
  timestamp: string;
  language: string;
  status: TExecutionStatus;
  error: string | null;
  data: {
    input?: string;
    output?: string;
    executionOutput: string;
    status: TExecutionStatus;
    acceptedCount?: number;
  }[];
};

export type ExecutionConsumer = TSubmitExecutionJob | TRunExecutionJob;
