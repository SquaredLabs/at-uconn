CREATE TABLE SpotlightType ( id SERIAL PRIMARY KEY NOT NULL, human_name text UNIQUE NOT NULL, component_name text UNIQUE NOT NULL );

INSERT INTO SpotlightType (human_name, component_name) VALUES ('Student Feature','StudentSpotlight') ON CONFLICT DO NOTHING;
INSERT INTO SpotlightType (human_name, component_name) VALUES ('Faculty Feature','FacultySpotlight') ON CONFLICT DO NOTHING;
INSERT INTO SpotlightType (human_name, component_name) VALUES ('Corporate Partnership','CorpSpotlight') ON CONFLICT DO NOTHING;
INSERT INTO SpotlightType (human_name, component_name) VALUES ('Centers & Institutes','InstSpotlight') ON CONFLICT DO NOTHING;
INSERT INTO SpotlightType (human_name, component_name) VALUES ('General','BlueSpotlight') ON CONFLICT DO NOTHING;

CREATE TABLE Spotlights ( id SERIAL PRIMARY KEY NOT NULL, article_id integer references articles(id) NOT NULL, start_time timestamp DEFAULT now(), end_time timestamp DEFAULT NULL );
