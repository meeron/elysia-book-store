-- CreateTable
CREATE TABLE "authors" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "date_of_birth" TIMESTAMPTZ NOT NULL,
    "date_of_death" TIMESTAMPTZ,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);
