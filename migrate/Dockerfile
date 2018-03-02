FROM alpine:3.7

# get all the build deps in one go
RUN apk add --update-cache cabal ghc curl musl-dev postgresql-dev
# runtime deps
RUN apk add libffi gmp

ENV PSM_VER=0.1.11.0
RUN curl -LO "https://github.com/ameingast/postgresql-simple-migration/archive/${PSM_VER}.tar.gz" && \
  tar xf "${PSM_VER}.tar.gz" --strip-components=1 && \
  cabal update && cabal install && cabal configure && cabal build -j

RUN apk del cabal ghc curl musl-dev
ENTRYPOINT ["./dist/build/migrate/migrate"]
