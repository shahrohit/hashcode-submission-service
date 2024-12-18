import { z } from "zod";

export const runTestcaseSchema = z.object({
  socketKey: z.string().nullable(),
  username: z
    .string({ message: "Username Not Found" })
    .min(1, "Username Not Found"),

  problem: z.string().min(1, "Problem is Required"),
  language: z.string().min(1, "Language is Required"),
  code: z.string().min(1, "Code is Required Required"),
  timestamp: z.string(),
  testcases: z.array(z.string().min(1, "Testcases is Required")),
  type: z.enum(["run"]),
});

export default runTestcaseSchema;

export type TRunTestcase = z.infer<typeof runTestcaseSchema>;

export type TRunProducerJob = {
  type: "run";
  username: string;
  problemId: number;
  problemSlug: string;
  socketKey: string | null;
  langId: number;
  language: string;
  code: string;
  solutionCode: string;
  testcases: string[];
  timeLimit: number;
  timestamp: string;
};
