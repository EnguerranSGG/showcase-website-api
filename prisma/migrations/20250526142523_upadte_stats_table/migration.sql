/*
  Warnings:

  - You are about to alter the column `value` on the `statistics` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.
  - Added the required column `is_percentage` to the `statistics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "statistics" ADD COLUMN     "is_percentage" BOOLEAN NOT NULL,
ALTER COLUMN "value" SET DATA TYPE DECIMAL(10,2);
