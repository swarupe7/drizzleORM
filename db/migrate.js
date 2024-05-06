import { migrate } from 'drizzle-orm/postgres-js/migrator';
import  db  from './client.js';
// This will run migrations on the database, skipping the ones already applied

async function migrateData(){
    await migrate(db, { migrationsFolder: './drizzle' });
    process.exit(0);

}

migrateData().catch((err)=>{
   console.log(err);
   process.exit(0);
})