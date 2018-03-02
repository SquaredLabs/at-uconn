#!/bin/bash
CON="postgres://app_user:password@db:5432/at_uconn"
docker inspect --type=image postgres-simple-migration > /dev/null
if [ $? -ne 0 ]; then
	docker build . -t postgres-simple-migration
fi
docker run --network="atuconn_default" -t postgres-simple-migration init "$CON"
docker run --network="atuconn_default" -v `pwd`/migrations:/data/migrations -t postgres-simple-migration migrate "$CON" /data/migrations
