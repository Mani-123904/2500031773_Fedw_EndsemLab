import React from "react";
import ProductCard from "../components/ProductCard";
export default function Products({ products, addToCart }) {
  return <section className="inner-page"><span className="eyebrow">THE SHOP</span><h1>All products</h1><p className="page-intro">Explore our collection of everyday essentials and thoughtful finds.</p>{products.length ? <div className="product-grid">{products.map(product => <ProductCard key={product.id} product={product} addToCart={addToCart} />)}</div> : <div className="empty-state">No products found. Try another search or category.</div>}</section>;
}