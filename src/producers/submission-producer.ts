import { channel } from "@config/queue-config";
import { SubmissionProducer } from "@utils/global-types";
import { SUBMISSION_QUEUE } from "@utils/constants";

const submissionProducer = (message: SubmissionProducer) => {
  try {
    if (!channel) throw new Error("RabbitMQ channel not initialized");
    channel.sendToQueue(SUBMISSION_QUEUE, Buffer.from(JSON.stringify(message)));
  } catch (error) {
    console.error("Error Producing message:", error);
  }
};

export default submissionProducer;
