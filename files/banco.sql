CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE "categorias" (
"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
"nome" varchar(80) NOT NULL,
PRIMARY KEY ("id") 
);
CREATE TABLE "treinos" (
"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
"treino" varchar(80) NOT NULL,
"created_at" timestamp with time zone NOT NULL DEFAULT now(),
PRIMARY KEY ("id") 
);
CREATE TABLE "series" (
"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
"treino_id" uuid NOT NULL,
"ordem" int4 NOT NULL,
"qtd_serie" int4 NOT NULL,
PRIMARY KEY ("id") 
);
CREATE TABLE "exercicios" (
"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
"categoria_id" uuid NOT NULL,
"nome" varchar(80) NOT NULL,
"pr_regresao" varchar(80) NOT NULL,
"sg_regresao" varchar(80) NOT NULL,
"pr_progresao" varchar(80) NOT NULL,
"sg_progresao" varchar(80) NOT NULL,
PRIMARY KEY ("id") 
);
CREATE TABLE "exer_series" (
"id" uuid NOT NULL DEFAULT uuid_generate_v4(),
"serie_id" uuid NOT NULL,
"exer_id" uuid NOT NULL,
"qtd_repeticoes" int4 NOT NULL,
PRIMARY KEY ("id") 
);

ALTER TABLE "series"      ADD CONSTRAINT "Data"  FOREIGN KEY ("treino_id")    REFERENCES "treinos"("id")    ON DELETE CASCADE ON UPDATE CASCADE
ALTER TABLE "exercicios"  ADD CONSTRAINT "Categ" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE CASCADE ON UPDATE CASCADE
ALTER TABLE "exer_series" ADD CONSTRAINT "Serie" FOREIGN KEY ("serie_id")     REFERENCES "series"("id")     ON DELETE CASCADE ON UPDATE CASCADE
ALTER TABLE "exer_series" ADD CONSTRAINT "Exer"  FOREIGN KEY ("exer_id")      REFERENCES "exercicios"("id") ON DELETE CASCADE ON UPDATE CASCADE