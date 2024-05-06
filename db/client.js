import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

const client = new pg.Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "1234",
  database: "orm",
});

 client.connect().then(()=>{
    console.log('Connected to database')
 });


 const db = drizzle(client);

 export default db;