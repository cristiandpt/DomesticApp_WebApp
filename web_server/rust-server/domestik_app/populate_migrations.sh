#!/bin/bash

diesel setup

diesel migration generate data 

echo $DATABASE_URL > .env

# populating up.sql
TIMESTAMP_DATA=$(ls migrations | grep data)
cat tables_definition.sql > "migrations/${TIMESTAMP_DATA}/up.sql"

# dropping tables in down.sql
grep "TABLE" tables_definition.sql | sed 's/ (//g' | sed 's/CREATE/DROP/' | awk '{print $0";"}' > "migrations/${TIMESTAMP_DATA}/down.sql"

# migrate tables to postgres container
diesel migration run
