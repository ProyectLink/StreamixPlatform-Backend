export interface DatabaseConfig {
  DATABASE_URL: string;
}

export const databaseConfig = () => ({
  DATABASE_URL: process.env.DATABASE_URL,
});
