/*
  Warnings:

  - You are about to drop the column `missions` on the `structures` table. All the data in the column will be lost.
  - You are about to drop the column `schedule` on the `structures` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "structures" DROP COLUMN "missions",
DROP COLUMN "schedule";

-- CreateTable
CREATE TABLE "Mission" (
    "mission_id" SERIAL NOT NULL,
    "content" VARCHAR(250) NOT NULL,
    "structure_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("mission_id")
);

-- AddForeignKey
ALTER TABLE "Mission" ADD CONSTRAINT "Mission_structure_id_fkey" FOREIGN KEY ("structure_id") REFERENCES "structures"("structure_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mission" ADD CONSTRAINT "Mission_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
