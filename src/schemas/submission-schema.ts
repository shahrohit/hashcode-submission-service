import { z } from "zod";

export const submissionSchema = z.object({
  id: z.string().nullable(),
  problem: z.string().min(1, "Problem is Required"),
  language: z.string().min(1, "Language is Required"),
  code: z.string().min(1, "Code is Required Required"),
  timestamp: z.string(),
});

export default submissionSchema;

export type Testcase = { input: string; output: string };
export type TSubmission = z.infer<typeof submissionSchema>;

export type TSubmissionJob = {
  id: string | null;
  language: string;
  code: string;
  testcases: Testcase[];
  timeLimit: number;
  timestamp: string;
};
