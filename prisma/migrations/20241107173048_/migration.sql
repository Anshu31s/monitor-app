/*
  Warnings:

  - You are about to drop the column `lastDownTime` on the `url` table. All the data in the column will be lost.
  - You are about to drop the column `totalDowntime` on the `url` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "url" DROP COLUMN "lastDownTime",
DROP COLUMN "totalDowntime";

-- CreateTable
CREATE TABLE "incident" (
    "id" TEXT NOT NULL,
    "urlId" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "enddTime" TIMESTAMP(3),

    CONSTRAINT "incident_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "incident" ADD CONSTRAINT "incident_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "url"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
