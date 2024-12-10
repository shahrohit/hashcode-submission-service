import { ADMIN_SERVICE_URL } from "@/config/server-config";
import fetchData from "@/controller/request-controller";
import submissionProducer from "@/producer/submission-producer";
import { Testcase, TSubmission } from "@/schemas/submission-schema";
import { NotFound } from "@/utils/errors";

const createSubmission = async (data: TSubmission) => {
  console.log(data);
  const problem = await fetchData(
    ADMIN_SERVICE_URL,
    `/api/submissions/problems/submit/${data.problem}/${data.language}`,
  );
  if (!problem) throw new NotFound("Problem Not Found");

  if (problem?.code) {
    problem.code = problem.code?.replace("%user%", data.code);
  }

  submissionProducer({
    id: data.id,
    code: problem.code as string,
    language: problem.language as string,
    testcases: problem.testcases as Testcase[],
    timeLimit: problem.timeLimit as number,
    timestamp: data.timestamp,
  });

  console.log(problem);
};

const submissionService = {
  createSubmission,
};

export default submissionService;
