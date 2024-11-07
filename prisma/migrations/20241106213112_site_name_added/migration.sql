/*
  Warnings:

  - Added the required column `siteName` to the `url` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "url" ADD COLUMN     "siteName" TEXT NOT NULL;
