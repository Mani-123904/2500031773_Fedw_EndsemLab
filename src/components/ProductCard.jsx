import React from "react";
import { ShoppingCart } from "lucide-react";
export default function ProductCard({ product, addToCart }) {
  return <article className="product-card"><div className="product-image"><img src={product.image} alt={product.name} loading="lazy" /><span className="product-tag">{product.category}</span></div><div className="product-info"><h3>{product.name}</h3><p>{product.description}</p><div className="product-bottom"><strong>₹{product.price.toLocaleString("en-IN")}</strong><button onClick={() => addToCart(product)} className="add-button"><ShoppingCart size={16} /> Add to Cart</button></div></div></article>;
}