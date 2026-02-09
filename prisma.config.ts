import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    
    url: process.env.DATABASE_URL || "postgresql://user:password@localhost:5432/football_catalogue?schema=public",
  },
});