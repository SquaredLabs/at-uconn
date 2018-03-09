ALTER TABLE Spotlights ADD COLUMN kind integer references SpotlightType(id);
ALTER TABLE Spotlights ADD COLUMN subject text NOT NULL;
