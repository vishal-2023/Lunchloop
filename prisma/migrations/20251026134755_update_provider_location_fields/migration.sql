/*
  Warnings:

  - You are about to drop the column `coverageRadiusKm` on the `Provider` table. All the data in the column will be lost.
  - You are about to drop the column `deliveryPincodes` on the `Provider` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Provider` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Provider` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Provider` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Provider` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Provider` table without a default value. This is not possible if the table is not empty.
  - Made the column `serviceName` on table `Provider` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "public"."Provider_email_key";

-- DropIndex
DROP INDEX "public"."Provider_phone_key";

-- AlterTable
ALTER TABLE "Provider" DROP COLUMN "coverageRadiusKm",
DROP COLUMN "deliveryPincodes",
DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "phone",
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "serviceName" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Provider_userId_key" ON "Provider"("userId");

-- AddForeignKey
ALTER TABLE "Provider" ADD CONSTRAINT "Provider_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
