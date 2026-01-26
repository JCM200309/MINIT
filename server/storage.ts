import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import type { Product, InsertProduct, ContactMessage, InsertContactMessage } from "@shared/schema";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRODUCTS_FILE = path.join(__dirname, "data", "products.json");
const MESSAGES_FILE = path.join(__dirname, "data", "messages.json");

function ensureDataDir() {
  const dataDir = path.join(__dirname, "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function readProducts(): Product[] {
  ensureDataDir();
  if (!fs.existsSync(PRODUCTS_FILE)) {
    return [];
  }
  const data = fs.readFileSync(PRODUCTS_FILE, "utf-8");
  return JSON.parse(data);
}

function writeProducts(products: Product[]): void {
  ensureDataDir();
  fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2));
}

function readMessages(): ContactMessage[] {
  ensureDataDir();
  if (!fs.existsSync(MESSAGES_FILE)) {
    return [];
  }
  const data = fs.readFileSync(MESSAGES_FILE, "utf-8");
  return JSON.parse(data);
}

function writeMessages(messages: ContactMessage[]): void {
  ensureDataDir();
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));
}

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, updates: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<boolean>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class FileStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return readProducts();
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const products = readProducts();
    return products.find(p => p.id === id);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const products = readProducts();
    const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
    const newProduct: Product = {
      ...product,
      id: maxId + 1,
    };
    products.push(newProduct);
    writeProducts(products);
    return newProduct;
  }

  async updateProduct(id: number, updates: Partial<InsertProduct>): Promise<Product | undefined> {
    const products = readProducts();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return undefined;
    
    products[index] = { ...products[index], ...updates };
    writeProducts(products);
    return products[index];
  }

  async deleteProduct(id: number): Promise<boolean> {
    const products = readProducts();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return false;
    
    products.splice(index, 1);
    writeProducts(products);
    return true;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const messages = readMessages();
    const maxId = messages.length > 0 ? Math.max(...messages.map(m => m.id)) : 0;
    const newMessage: ContactMessage = {
      ...message,
      id: maxId + 1,
      createdAt: new Date().toISOString(),
    };
    messages.push(newMessage);
    writeMessages(messages);
    return newMessage;
  }
}

export const storage = new FileStorage();
