import { integer, pgEnum, pgTable, serial, uniqueIndex, varchar,uuid } from 'drizzle-orm/pg-core';


export const userSchema=pgTable("users",{id:uuid('id').notNull(),
                name:varchar('name').primaryKey(),
                bio:varchar('bio').notNull()});