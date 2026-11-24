import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, ShieldCheck, Headphones } from "lucide-react";
import ProductCard from "../components/ProductCard";
export default function Home({ products, addToCart, setCategory }) {
  return <div>
    <section className="hero"><div className="hero-copy"><span className="eyebrow">THE EVERYDAY EDIT</span><h1>Find your next<br /><em>favourite thing.</em></h1><p>Fresh picks, feel-good prices, and little upgrades that make every day better.</p><Link to="/products" className="primary-button">Explore products <ArrowRight size={17} /></Link></div><div className="hero-art"><img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85" alt="Curated shopping essentials" /><div className="hero-sticker">A little<br />something<br /><b>for you ✦</b></div></div></section>
    <div className="benefits"><div><Truck /><span><b>Easy delivery</b><small>Right to your door</small></span></div><div><ShieldCheck /><span><b>Secure shopping</b><small>Shop with confidence</small></span></div><div><Headphones /><span><b>Here to help</b><small>Friendly support</small></span></div></div>
    <section className="section-heading"><div><span className="eyebrow">HANDPICKED FOR YOU</span><h2>Featured products</h2><p>Good design. Useful details. Great everyday value.</p></div><Link to="/products" className="text-link">View all <ArrowRight size={16} /></Link></section>
    <div className="product-grid">{products.slice(0, 4).map(product => <ProductCard key={product.id} product={product} addToCart={addToCart} />)}</div>
    <section className="category-banner"><div><span className="eyebrow">A WORLD OF GOOD FINDS</span><h2>Make room for<br />something new.</h2><p>Explore the categories you love.</p></div><Link to="/categories" className="light-button" onClick={() => setCategory("All")}>Browse collections <ArrowRight size={16} /></Link></section>
  </div>;
}