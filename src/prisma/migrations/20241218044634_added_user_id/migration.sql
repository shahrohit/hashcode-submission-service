/*
  Warnings:

  - You are about to drop the column `username` on the `Submission` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "username",
ADD COLUMN     "userId" INTEGER NOT NULL;