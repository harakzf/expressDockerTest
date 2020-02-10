-- sqlファイルにCreate文とinsert文を記載する（初期セットアップ）
CREATE TABLE cars(
  name character varying(24) NOT NULL,
  maker character varying(24) NOT NULL,
  CONSTRAINT pk_cars PRIMARY KEY (name)
);

INSERT INTO cars VALUES ('prius', 'TOYOTA'), ('VOXY', 'TOYOTA');