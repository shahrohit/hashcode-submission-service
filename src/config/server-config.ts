import dotenv from "dotenv";

import { DEV_ENV } from "@utils/constants";

dotenv.config();

export const PORT = +(process.env.PORT || 4004);
export const NODE_ENV = process.env.NODE_ENV || DEV_ENV;
export const RABBITMQ_URL = process.env.RABBITMQ_URL!;
export const ADMIN_SERVICE_URL = process.env.ADMIN_SERVICE_URL!;
export const USER_SERVICE_URL = process.env.USER_SERVICE_URL!;
export const WS_SERVICE_URL = process.env.WS_SERVICE_URL!;
