import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, X, Save, ArrowLeft, Package } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { insertProductSchema, type Product, type InsertProduct } from "@shared/schema";

export default function AdminPage() {
  const { toast } = useToast();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertProduct) => {
      return apiRequest("/api/products", { method: "POST", body: JSON.stringify(data) });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      setIsCreating(false);
      toast({ title: "Producto creado exitosamente" });
    },
    onError: () => {
      toast({ title: "Error al crear producto", variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: Partial<InsertProduct> }) => {
      return apiRequest(`/api/products/${id}`, { method: "PUT", body: JSON.stringify(data) });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      setEditingProduct(null);
      toast({ title: "Producto actualizado exitosamente" });
    },
    onError: () => {
      toast({ title: "Error al actualizar producto", variant: "destructive" });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest(`/api/products/${id}`, { method: "DELETE" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/products"] });
      toast({ title: "Producto eliminado" });
    },
    onError: () => {
      toast({ title: "Error al eliminar producto", variant: "destructive" });
    },
  });

  return (
    <div className="min-h-screen bg-secondary/30">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" data-testid="button-back-home">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-display font-semibold">Panel de Administración</h1>
          </div>
          <Button onClick={() => setIsCreating(true)} data-testid="button-add-product">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Producto
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {isLoading ? (
          <div className="text-center py-12 text-muted-foreground">Cargando productos...</div>
        ) : products.length === 0 ? (
          <Card className="p-12 text-center">
            <Package className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No hay productos. Crea el primero.</p>
          </Card>
        ) : (
          <div className="grid gap-4">
            {products.map((product) => (
              <Card key={product.id} className="p-4" data-testid={`card-product-${product.id}`}>
                <div className="flex items-start gap-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    <span className="text-xs bg-secondary px-2 py-1 rounded mt-2 inline-block">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setEditingProduct(product)}
                      data-testid={`button-edit-${product.id}`}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        if (confirm("¿Eliminar este producto?")) {
                          deleteMutation.mutate(product.id);
                        }
                      }}
                      data-testid={`button-delete-${product.id}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>

      <AnimatePresence>
        {(isCreating || editingProduct) && (
          <ProductModal
            product={editingProduct}
            onClose={() => {
              setIsCreating(false);
              setEditingProduct(null);
            }}
            onSave={(data) => {
              if (editingProduct) {
                updateMutation.mutate({ id: editingProduct.id, data });
              } else {
                createMutation.mutate(data as InsertProduct);
              }
            }}
            isPending={createMutation.isPending || updateMutation.isPending}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductModal({
  product,
  onClose,
  onSave,
  isPending,
}: {
  product: Product | null;
  onClose: () => void;
  onSave: (data: InsertProduct | Partial<InsertProduct>) => void;
  isPending: boolean;
}) {
  const [features, setFeatures] = useState<string[]>(product?.features || []);
  const [newFeature, setNewFeature] = useState("");
  const [specs, setSpecs] = useState<Record<string, string>>(
    (product?.specifications as Record<string, string>) || {}
  );
  const [newSpecKey, setNewSpecKey] = useState("");
  const [newSpecValue, setNewSpecValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InsertProduct>({
    resolver: zodResolver(insertProductSchema),
    defaultValues: product
      ? {
          name: product.name,
          description: product.description,
          category: product.category,
          imageUrl: product.imageUrl,
          features: product.features,
          specifications: product.specifications as Record<string, string>,
        }
      : {
          name: "",
          description: "",
          category: "",
          imageUrl: "",
          features: [],
          specifications: {},
        },
  });

  const addFeature = () => {
    if (newFeature.trim()) {
      setFeatures([...features, newFeature.trim()]);
      setNewFeature("");
    }
  };

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const addSpec = () => {
    if (newSpecKey.trim() && newSpecValue.trim()) {
      setSpecs({ ...specs, [newSpecKey.trim()]: newSpecValue.trim() });
      setNewSpecKey("");
      setNewSpecValue("");
    }
  };

  const removeSpec = (key: string) => {
    const newSpecs = { ...specs };
    delete newSpecs[key];
    setSpecs(newSpecs);
  };

  const onSubmit = (data: InsertProduct) => {
    onSave({
      ...data,
      features,
      specifications: specs,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">
            {product ? "Editar Producto" : "Nuevo Producto"}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} data-testid="button-close-modal">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre del Producto *</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="MINIT-WOOD"
                data-testid="input-product-name"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Categoría *</Label>
              <Input
                id="category"
                {...register("category")}
                placeholder="Maderas, Textiles, etc."
                data-testid="input-product-category"
              />
              {errors.category && (
                <p className="text-sm text-destructive">{errors.category.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descripción *</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Descripción del producto..."
              rows={3}
              data-testid="input-product-description"
            />
            {errors.description && (
              <p className="text-sm text-destructive">{errors.description.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl">URL de la Imagen *</Label>
            <Input
              id="imageUrl"
              {...register("imageUrl")}
              placeholder="https://..."
              data-testid="input-product-image"
            />
            {errors.imageUrl && (
              <p className="text-sm text-destructive">{errors.imageUrl.message}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label>Características</Label>
            <div className="flex gap-2">
              <Input
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                placeholder="Nueva característica"
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
                data-testid="input-new-feature"
              />
              <Button type="button" variant="outline" onClick={addFeature} data-testid="button-add-feature">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {features.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {features.map((f, i) => (
                  <span
                    key={i}
                    className="bg-secondary px-3 py-1 rounded text-sm flex items-center gap-2"
                  >
                    {f}
                    <button type="button" onClick={() => removeFeature(i)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-3">
            <Label>Especificaciones Técnicas</Label>
            <div className="flex gap-2">
              <Input
                value={newSpecKey}
                onChange={(e) => setNewSpecKey(e.target.value)}
                placeholder="Propiedad (ej: pH)"
                className="flex-1"
                data-testid="input-spec-key"
              />
              <Input
                value={newSpecValue}
                onChange={(e) => setNewSpecValue(e.target.value)}
                placeholder="Valor (ej: 7.0)"
                className="flex-1"
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSpec())}
                data-testid="input-spec-value"
              />
              <Button type="button" variant="outline" onClick={addSpec} data-testid="button-add-spec">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {Object.keys(specs).length > 0 && (
              <div className="bg-secondary/50 rounded p-3 space-y-2">
                {Object.entries(specs).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between text-sm">
                    <span>
                      <strong>{key}:</strong> {value}
                    </span>
                    <button type="button" onClick={() => removeSpec(key)}>
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose} data-testid="button-cancel">
              Cancelar
            </Button>
            <Button type="submit" disabled={isPending} data-testid="button-save-product">
              <Save className="w-4 h-4 mr-2" />
              {isPending ? "Guardando..." : "Guardar"}
            </Button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
