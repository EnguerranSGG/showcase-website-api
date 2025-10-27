/*
  Warnings:

  - You are about to drop the column `image_url` on the `news` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `steps` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `structures` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `values` table. All the data in the column will be lost.
  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "news" DROP COLUMN "image_url",
ADD COLUMN     "file_id" INTEGER;

-- AlterTable
ALTER TABLE "partners" ADD COLUMN     "file_id" INTEGER;

-- AlterTable
ALTER TABLE "steps" DROP COLUMN "image_url",
ADD COLUMN     "file_id" INTEGER;

-- AlterTable
ALTER TABLE "structures" DROP COLUMN "image_url",
ADD COLUMN     "file_id" INTEGER;

-- AlterTable
ALTER TABLE "values" DROP COLUMN "image_url",
ADD COLUMN     "file_id" INTEGER;

-- DropTable
DROP TABLE "images";

-- AddForeignKey
ALTER TABLE "partners" ADD CONSTRAINT "partners_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "structures" ADD CONSTRAINT "structures_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "values" ADD CONSTRAINT "values_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "steps" ADD CONSTRAINT "steps_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "files"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;
