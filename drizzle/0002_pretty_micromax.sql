ALTER TABLE "sharelink" ALTER COLUMN "id" SET DATA TYPE bigint;--> statement-breakpoint
ALTER TABLE "sharelink" ALTER COLUMN "id" DROP IDENTITY;--> statement-breakpoint
ALTER TABLE "sharelink" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "sharelink" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "sharelink" DROP COLUMN "createdAt";--> statement-breakpoint
ALTER TABLE "sharelink" DROP COLUMN "updatedAt";