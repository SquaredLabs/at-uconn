# at-uconn

## Structure
* `app\` holds the actual user-facing app
* `cms\` holds an admin-on-rest based reactapp for modifying the data presented by the app
* `docker*` are for setting up local development instances
* `migrate\` holds migrations and tools for manipulating the database from the command line

## Getting Started
```sh
docker-compose up -d
pushd migrate && ./migrate.sh && popd # this will take a while the first time around.
docker-compose down && docker-compose up -d
pushd cms && npm install && npm start && popd
pushd app && npm install
npm start && popd
```
