import { Products } from "../products";

export function searchProducts(query: string) {
  const q = query.toLowerCase();

  return Products
    .filter(product =>
      product.name.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q)
    )
    .slice(0, 5)
    .map(product => ({
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price,
      image: product.image,
      url: product.url,
    }));
}