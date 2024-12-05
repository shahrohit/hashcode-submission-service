import submissionProducer from "@/producer/submission-producer";
import { TSubmissionJob } from "@/schemas/submission-schema";

const createSubmission = async (data: TSubmissionJob) => {
  submissionProducer(data);
};

const submissionService = {
  createSubmission,
};

export default submissionService;
