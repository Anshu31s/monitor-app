-- AlterTable
ALTER TABLE "incident" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "url" ADD COLUMN     "isPaused" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "notification" ADD CONSTRAINT "notification_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "url"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
