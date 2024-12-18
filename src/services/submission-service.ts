import { ADMIN_SERVICE_URL } from "@config/server-config";
import fetchData from "@controller/request-controller";
import submissionProducer from "@producers/submission-producer";
import { TRunTestcase } from "@schemas/runtestcase-schema";
import { TSubmit } from "@schemas/submit-schema";
import { NotFound } from "@utils/errors";
import { TProblemRun, TProblemSubmit } from "@utils/global-types";
import { USER_CODE } from "@utils/constants";
import submissionRepository from "@/repositories/submission-repository";

const getSubmissions = async (username: string, problemId: number) => {
  return await submissionRepository.getSubmissions(username, problemId);
};

const createSubmit = async (data: TSubmit) => {
  const problem = (await fetchData(
    ADMIN_SERVICE_URL,
    `/api/submissions/problems/submit/${data.problem}/${data.language}`,
  )) as TProblemSubmit;
  if (!problem) throw new NotFound("Problem Not Found");

  if (problem.code) {
    problem.code = problem.code.replace(USER_CODE, data.code);
  }

  submissionProducer({
    type: data.type,
    username: data.username,
    problemId: problem.id,
    langId: problem.langId,
    problemSlug: data.problem,
    socketKey: data.socketKey,
    code: problem.code,
    language: problem.language,
    testcases: problem.testcases,
    timeLimit: problem.timeLimit,
    timestamp: data.timestamp,
  });
};

const createRunTestcase = async (data: TRunTestcase) => {
  const problem = (await fetchData(
    ADMIN_SERVICE_URL,
    `/api/submissions/problems/run/${data.problem}/${data.language}`,
  )) as TProblemRun;

  if (!problem) throw new NotFound("Problem Not Found");

  if (problem?.code) {
    problem.solutionCode = problem.code?.replace(
      USER_CODE,
      problem.solutionCode,
    );
    problem.code = problem.code?.replace(USER_CODE, data.code);
  }

  submissionProducer({
    type: data.type,
    username: data.username,
    problemId: problem.id,
    langId: problem.langId,
    problemSlug: data.problem,
    socketKey: data.socketKey,
    code: problem.code,
    solutionCode: problem.solutionCode,
    language: problem.language,
    testcases: data.testcases,
    timeLimit: problem.timeLimit,
    timestamp: data.timestamp,
  });
};

const submissionService = {
  createSubmit,
  createRunTestcase,
  getSubmissions,
};

export default submissionService;
