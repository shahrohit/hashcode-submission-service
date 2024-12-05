import { channel } from "@/config/queue-config";
import { TSubmissionJob } from "@/schemas/submission-schema";
import { SUBMISSION_QUEUE } from "@/utils/strings";

const submissionProducer = (message: TSubmissionJob) => {
  try {
    if (!channel) throw new Error("RabbitMQ channel not initialized");
    channel.sendToQueue(SUBMISSION_QUEUE, Buffer.from(JSON.stringify(message)));
  } catch (error) {
    console.error("Error Producing message:", error);
  }
};

export default submissionProducer;
