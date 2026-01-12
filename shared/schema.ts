import { pgTable, text, serial, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// We are not using a DB for cards, but we define the shape here for consistency
export const cardSchema = z.object({
  slug: z.string(),
  title: z.string(),
  thumbnail: z.string(),
  images: z.array(z.string()).length(3),
  prediction: z.string(), // Markdown content
});

export type Card = z.infer<typeof cardSchema>;

// Required by template but unused for this static site
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users);
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
