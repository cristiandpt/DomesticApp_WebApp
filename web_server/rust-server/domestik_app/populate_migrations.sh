#!/bin/bash

echo "DATABASE_URL=${DATABASE_URL}" > .env

TIMESTAMP_DATA=$(ls migrations | grep data)
if [ -d "migrations/${TIMESTAMP_DATA}/" ]; then
 # If there's no initial data folder
 echo "Directory exists, so diesel setup is not performed" 
 cargo run
else 
  diesel setup
  diesel migration generate data 
  TIMESTAMP_DATA=$(ls migrations | grep data)
  # populating up.sql
  cat ./database/db/tables_definition.sql> "migrations/${TIMESTAMP_DATA}/up.sql"

  # dropping tables in down.sql
  grep "TABLE" ./database/db/tables_definition.sql | sed 's/ (//g' | sed 's/CREATE/DROP/' | awk '{print $0";"}' | tac > "migrations/${TIMESTAMP_DATA}/down.sql"
  
  # migrate tables to postgres container
  diesel migration run
  cargo run
fi


