#!/bin/bash

echo "DATABASE_URL=${DATABASE_URL}" > .env
echo "EXPIRE_MINUTES=5" >> .env

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
  echo "++++ POPULATING UP.SQL ++++"
  cat ./database/db/tables_definition.sql> "migrations/${TIMESTAMP_DATA}/up.sql"
  # inserting data
  echo "++++ INSERTING INFO INTO UP.SQL ++++"
  cat ./database/db/records.sql >> "migrations/${TIMESTAMP_DATA}/up.sql"

  # dropping tables in down.sql
  echo "++++ POPULATING DOWN.SQL ++++"
  grep "TABLE" ./database/db/tables_definition.sql | sed 's/ (//g' | sed 's/CREATE/DROP/' | awk '{print $0";"}' | tac > "migrations/${TIMESTAMP_DATA}/down.sql"
  
  # migrate tables to postgres container
  diesel migration run
#   tail -f /dev/null

  # remove max_length causing conflicts
sed -i '/max_length/d' ./src/schema.rs 
  cargo run
fi



