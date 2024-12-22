import amqplib from "amqplib";

import { RABBITMQ_URL } from "@config/server-config";
import executionWorker from "@workers/execution-worker";

import consumeQueue from "@utils/consume-queue";
import { EXECUTION_QUEUE } from "@utils/constants";

let channel: amqplib.Channel;
async function connectQueue() {
  try {
    const connection = await amqplib.connect(RABBITMQ_URL);
    channel = await connection.createChannel();
    consumeQueue(channel, EXECUTION_QUEUE, executionWorker);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error?.code === "ENOTFOUND") {
      console.log("Error connecting Message Queue ");
      process.exit();
    }
  }
}

export default connectQueue;
export { channel };
