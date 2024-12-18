-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Accepted', 'CompiledError', 'WrongAnswer', 'Error', 'TLE', 'RTE');

-- CreateTable
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "problemId" INTEGER NOT NULL,
    "langId" INTEGER NOT NULL,
    "input" TEXT,
    "output" TEXT,
    "executionOutput" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "timestamp" TEXT NOT NULL,
    "acceptedCount" INTEGER NOT NULL DEFAULT 0,
    "testcaseCount" INTEGER NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);
