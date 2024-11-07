/*
  Warnings:

  - You are about to drop the column `updatedAT` on the `notification` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAT` on the `url` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `url` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "notification" DROP COLUMN "updatedAT",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "url" DROP COLUMN "updatedAT",
ADD COLUMN     "lastDownTime" TIMESTAMP(3),
ADD COLUMN     "totalDowntime" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "totalUptime" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
