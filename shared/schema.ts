import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "El nombre es requerido"),
  description: z.string().min(1, "La descripción es requerida"),
  category: z.string().min(1, "La categoría es requerida"),
  features: z.array(z.string()).default([]),
  specifications: z.record(z.string(), z.string()).default({}),
  imageUrl: z.string().url("URL de imagen inválida"),
});

export const insertProductSchema = productSchema.omit({ id: true });

export const contactMessageSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(1, "El mensaje es requerido"),
  createdAt: z.string(),
});

export const insertContactMessageSchema = contactMessageSchema.omit({ id: true, createdAt: true });

export type Product = z.infer<typeof productSchema>;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type ContactMessage = z.infer<typeof contactMessageSchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
