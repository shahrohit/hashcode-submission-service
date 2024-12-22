import prisma from "@/config/db-config";
import { ADMIN_SERVICE_URL, USER_SERVICE_URL } from "@/config/server-config";
import { NotFound } from "@/utils/errors";
import { submissionResponse, TCreateSubmission } from "@/utils/global-types";
import axios from "axios";

const createSubmission = async (username: string, data: TCreateSubmission) => {
  const url = `${USER_SERVICE_URL}/api/users/id/${username}`;
  const response = await axios.get(url);
  const user = response.data.data as { id: number } | null;
  if (user) {
    await prisma.submission.create({
      data: {
        userId: user.id,
        ...data,
      },
    });
  }
};

const getSubmissions = async (username: string, problemId: number) => {
  let url = `${USER_SERVICE_URL}/api/users/id/${username}`;
  const userResponse = await axios.get(url);
  const user = userResponse.data.data as { id: number } | null;
  if (!user) throw new NotFound("Username Not Found");

  url = `${ADMIN_SERVICE_URL}/api/submissions/languages`;
  const LangResponse = await axios.get(url);
  const languages = LangResponse.data.data;

  const submissions = await prisma.submission.findMany({
    where: {
      userId: user.id,
      problemId: problemId,
    },
    orderBy: {
      timestamp: "desc",
    },
  });

  const response: submissionResponse[] = [];
  submissions.forEach(submission => {
    response.push({
      ...submission,
      language: languages[submission.langId],
    });
  });
  return response;
};

const submissionRepository = {
  createSubmission,
  getSubmissions,
};
export default submissionRepository;
