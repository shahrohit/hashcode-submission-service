import { z } from "zod";

export const ID = z.coerce.number().positive("Invalid ID");
