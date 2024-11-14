/*
  Warnings:

  - You are about to drop the column `enddime` on the `incident` table. All the data in the column will be lost.
  - You are about to drop the column `notificationId` on the `url` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[notificationId]` on the table `incident` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "notification" DROP CONSTRAINT "notification_urlId_fkey";

-- AlterTable
ALTER TABLE "incident" DROP COLUMN "enddime",
ADD COLUMN     "endTime" TIMESTAMP(3),
ADD COLUMN     "notificationId" TEXT;

-- AlterTable
ALTER TABLE "notification" ALTER COLUMN "mailLimit" SET DEFAULT 2;

-- AlterTable
ALTER TABLE "url" DROP COLUMN "notificationId";

-- CreateIndex
CREATE UNIQUE INDEX "incident_notificationId_key" ON "incident"("notificationId");

-- AddForeignKey
ALTER TABLE "incident" ADD CONSTRAINT "incident_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "notification"("id") ON DELETE SET NULL ON UPDATE CASCADE;
