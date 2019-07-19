const { Pool } = require('pg')

const config={
    connectionString: process.env.DATABASE_URL ,
    ssl: true
}
// Sadly pg doesn't support schema search path in connection string or in its configuration obj
// The correct connection string wuold be postgres://user:password@example_host.com:5432/example_database?schema_search_path=schema1,public
// where schema1 represents the user's preferred schema.
// The current schema search path configuration can be retrived with the command "SHOW search_path" 
// (I can notice by doing so that there is no difference setting schema_search_path=abbadiapasseggiate in the connection string )
// One should run the db command "SET search_path TO myschema,public;" at the initialization of every connection to manually configure its schema preference,
// but, since I'm using a connection pool, I prefer no to manage that.
// More documentation on https://www.postgresql.org/docs/8.2/ddl-schemas.html

const pool = new Pool(config)

module.exports=pool;