/*
  Warnings:

  - Added the required column `targetDomain` to the `url` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "url" ADD COLUMN     "targetDomain" TEXT NOT NULL;
