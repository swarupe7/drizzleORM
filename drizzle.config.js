

export default {
  schema: './db/schema.js',
  out: './drizzle',
  driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    host: "localhost",
    user: "postgres",
    password: "1234",
    database: "orm",
  }
} 