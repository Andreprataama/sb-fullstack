CREATE TABLE "sharelink" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "sharelink_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"url" varchar(255) NOT NULL,
	"title" integer NOT NULL,
	"createdAt" integer DEFAULT 1747326788484 NOT NULL,
	"updatedAt" integer DEFAULT 1747326788484 NOT NULL
);
