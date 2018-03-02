pg_dump -T schema_migrations --data-only postgres://app_user:password@localhost:5432/at_uconn | tee backup.sql
