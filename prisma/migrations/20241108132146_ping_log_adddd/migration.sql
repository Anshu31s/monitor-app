/*
  Warnings:

  - You are about to drop the column `enddTime` on the `incident` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "incident" DROP COLUMN "enddTime",
ADD COLUMN     "enddime" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "pingLog" (
    "id" TEXT NOT NULL,
    "urlId" TEXT NOT NULL,
    "avgTime" INTEGER NOT NULL,
    "maxTime" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pingLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pingLog" ADD CONSTRAINT "pingLog_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "url"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
