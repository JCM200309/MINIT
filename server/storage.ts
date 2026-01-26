import { db } from "./db";
import {
  products,
  contactMessages,
  type InsertProduct,
  type InsertContactMessage,
  type Product,
  type ContactMessage
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  seedProducts(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async seedProducts(): Promise<void> {
    const existing = await this.getProducts();
    if (existing.length > 0) return;

    const seedData: InsertProduct[] = [
      {
        name: "MINIT-WOOD",
        description: "Retardante de fuego para maderas y derivados. Ideal para construcción y decoración.",
        category: "Maderas",
        features: ["Incoloro e inodoro", "No tóxico", "Fácil aplicación", "Certificado ISO 9001"],
        specifications: { "pH": "7.0", "Densidad": "1.1 g/cm³", "Rendimiento": "3-4 m²/L" },
        imageUrl: "https://images.unsplash.com/photo-1543854589-32d5e219fb06?auto=format&fit=crop&q=80&w=800" // Wood texture placeholder
      },
      {
        name: "MINIT-TEXTILE",
        description: "Solución ignífuga para todo tipo de telas y cortinas. Mantiene la textura original.",
        category: "Textiles",
        features: ["Lavable", "No mancha", "Hipoalergénico", "Para fibras naturales y sintéticas"],
        specifications: { "pH": "6.5", "Apariencia": "Líquido transparente", "Secado": "2-4 horas" },
        imageUrl: "https://images.unsplash.com/photo-1521199326922-bd5a513eb156?auto=format&fit=crop&q=80&w=800" // Fabric placeholder
      },
      {
        name: "MINIT-PAPER",
        description: "Protección contra fuego para cartón y papel. Esencial para archivos y embalajes.",
        category: "Papel",
        features: ["Alta penetración", "No altera colores", "Biodegradable"],
        specifications: { "pH": "7.2", "Solubilidad": "100% en agua", "Aplicación": "Spray o inmersión" },
        imageUrl: "https://images.unsplash.com/photo-1586075010925-121d8e3d97d4?auto=format&fit=crop&q=80&w=800" // Paper/Cardboard placeholder
      },
      {
        name: "MINIT-COAT",
        description: "Recubrimiento intumescente para estructuras metálicas. Protección pasiva industrial.",
        category: "Industrial",
        features: ["Resistencia hasta 120 mins", "Acabado liso", "Base agua"],
        specifications: { "Espesor": "0.5mm - 2mm", "Color": "Blanco mate", "VOC": "< 50 g/L" },
        imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" // Industrial structure placeholder
      }
    ];

    await db.insert(products).values(seedData);
  }
}

export const storage = new DatabaseStorage();
