import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";

export const products = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 2499, description: "Immersive sound with a comfortable fit.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85" },
  { id: 2, name: "Everyday Backpack", category: "Accessories", price: 1899, description: "A lightweight companion for busy days.", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85" },
  { id: 3, name: "Classic Sneakers", category: "Shoes", price: 3299, description: "Clean style and all-day comfort.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85" },
  { id: 4, name: "Minimal Wrist Watch", category: "Accessories", price: 2799, description: "A timeless design for every occasion.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85" },
  { id: 5, name: "Cotton T-Shirt", category: "Fashion", price: 799, description: "Soft cotton with an easy everyday fit.", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85" },
  { id: 6, name: "Smart Desk Lamp", category: "Home Appliances", price: 1499, description: "Warm, adjustable light for your workspace.", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85" },
  { id: 7, name: "Compact Camera", category: "Electronics", price: 15999, description: "Capture your favourite moments in detail.", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85" },
  { id: 8, name: "Running Shoes", category: "Shoes", price: 2999, description: "Supportive cushioning for every step.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85" }
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const filteredProducts = useMemo(() => products.filter(product => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = `${product.name} ${product.description} ${product.category}`.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [category, search]);

  const addToCart = (product) => setCart(current => {
    const found = current.find(item => item.id === product.id);
    return found
      ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { ...product, quantity: 1 }];
  });

  return (
    <>
      <Header search={search} setSearch={setSearch} cartCount={cartCount} />
      <Navbar />
      <div className="page-shell">
        <Sidebar selected={category} onSelect={setCategory} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home products={filteredProducts} addToCart={addToCart} setCategory={setCategory} />} />
            <Route path="/products" element={<Products products={filteredProducts} addToCart={addToCart} />} />
            <Route path="/categories" element={<Categories onSelect={setCategory} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home products={filteredProducts} addToCart={addToCart} setCategory={setCategory} />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}