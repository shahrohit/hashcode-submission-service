import { z } from "zod";

export const submitSchema = z.object({
  socketKey: z.string().nullable(),
  username: z
    .string({ message: "Username Not Found" })
    .min(1, "Username Not Found"),

  problem: z.string().min(1, "Problem is Required"),
  language: z.string().min(1, "Language is Required"),
  code: z.string().min(1, "Code is Required Required"),
  timestamp: z.string(),
  type: z.enum(["submit"]),
});

export default submitSchema;

export type Testcase = { input: string; output: string };
export type TSubmit = z.infer<typeof submitSchema>;

export type TSubmitProducerJob = {
  type: "submit";
  username: string;
  problemId: number;
  langId: number;
  problemSlug: string;
  socketKey: string | null;
  language: string;
  code: string;
  testcases: Testcase[];
  timeLimit: number;
  timestamp: string;
};
