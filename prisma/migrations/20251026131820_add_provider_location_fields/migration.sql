-- AlterTable
ALTER TABLE "Provider" ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "coverageRadiusKm" DOUBLE PRECISION,
ADD COLUMN     "deliveryPincodes" TEXT[],
ADD COLUMN     "latitude" DOUBLE PRECISION,
ADD COLUMN     "longitude" DOUBLE PRECISION,
ADD COLUMN     "pincode" TEXT,
ADD COLUMN     "serviceName" TEXT;
