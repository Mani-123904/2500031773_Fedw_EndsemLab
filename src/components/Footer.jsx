import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ShoppingBag } from "lucide-react";
export default function Footer() {
  return <footer className="footer"><div className="footer-grid"><div className="footer-brand"><Link to="/" className="brand footer-logo"><span className="brand-mark"><ShoppingBag size={21} /></span><span>shop<span className="brand-accent">nest</span></span></Link><p>Everyday finds, thoughtful prices. Shop the latest essentials in one easy place.</p></div><div><h4>Quick Links</h4><Link to="/">Home</Link><Link to="/products">Products</Link><Link to="/categories">Categories</Link><Link to="/about">About Us</Link></div><div><h4>Contact Information</h4><p><MapPin size={15} /> Markapur, Andhra Pradesh, India</p><p><Phone size={15} /> +91 98765 43210</p><p><Mail size={15} /> hello@shopnest.example</p></div></div><div className="copyright">© {new Date().getFullYear()} ShopNest. All rights reserved.</div></footer>;
}