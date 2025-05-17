import { pgTable, bigint, text, varchar, timestamp } from 'drizzle-orm/pg-core'

export const shareLink = pgTable('sharelink', {
  id: bigint('id', { mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
  url: text('url'),
  title: varchar('title', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})
