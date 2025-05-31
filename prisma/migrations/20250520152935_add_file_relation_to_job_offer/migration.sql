/*
  Warnings:

  - You are about to drop the column `image_url` on the `job_offers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "job_offers" DROP COLUMN "image_url",
ADD COLUMN     "file_id" INTEGER;

-- AddForeignKey
ALTER TABLE "job_offers" ADD CONSTRAINT "job_offers_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;
