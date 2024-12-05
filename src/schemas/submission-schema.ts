import { z } from "zod";

export const submissionSchema = z.object({
  language: z.string().min(1, "Required"),
  code: z.string().min(1, "Required"),
  testcases: z
    .array(
      z.object({
        input: z.string().min(1, "input is Required"),
        output: z.string().min(1, "output is Required"),
      }),
    )
    .nonempty({ message: "Testcase is Required" }),
  time: z.number().positive("Invalid Time Limit"),
});

export default submissionSchema;
export type TSubmissionJob = z.infer<typeof submissionSchema>;
