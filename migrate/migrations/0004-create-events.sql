CREATE TABLE Events ( id SERIAL PRIMARY KEY NOT NULL, title text NOT NULL, body text NOT NULL, author_id integer references authors(id) NOT NULL, location_id integer references locations(id) NOT NULL, scheduled_for timestamp NOT NULL, published timestamp DEFAULT now() );