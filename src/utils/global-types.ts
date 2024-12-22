import { TRunProducerJob } from "@schemas/runtestcase-schema";
import { TSubmitProducerJob } from "@schemas/submit-schema";

export type TProblemSubmit = {
  id: number;
  langId: number;
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
  langId: number;
  language: string;
  code: string;
  solutionCode: string;
  timeLimit: number;
};

export type SubmissionProducer = TSubmitProducerJob | TRunProducerJob;

export type TExecutionStatus =
  | "Accepted"
  | "CompiledError"
  | "WrongAnswer"
  | "Error"
  | "TLE"
  | "RTE";

export type TSubmitExecutionJob = {
  type: "submit";
  username: string;
  problemId: number;
  langId: number;
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
  langId: number;
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

export type TCreateSubmission = {
  problemId: number;
  langId: number;
  input?: string;
  output?: string;
  executionOutput: string;
  status: TExecutionStatus;
  timestamp: string;
  acceptedCount?: number;
  testcaseCount: number;
};

export type submissionResponse = {
  userId: number;
  problemId: number;
  langId: number;
  input: string | null;
  output: string | null;
  executionOutput: string;
  status: TExecutionStatus;
  timestamp: string;
  acceptedCount: number;
  testcaseCount: number;
  id: number;
  language: string;
};
