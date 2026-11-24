import React from "react";
import { SlidersHorizontal } from "lucide-react";
const categories = ["All", "Electronics", "Fashion", "Shoes", "Accessories", "Home Appliances"];
export default function Sidebar({ selected, onSelect }) {
  return <aside className="sidebar"><div className="sidebar-title"><SlidersHorizontal size={17} /><h3>Categories</h3></div><p className="sidebar-caption">Browse by department</p><div className="category-list">{categories.map(item => <button key={item} onClick={() => onSelect(item)} className={selected === item ? "category-option selected" : "category-option"}>{item}<span>›</span></button>)}</div><div className="sidebar-note"><span>✨</span><strong>Good finds, great prices.</strong><p>Discover something you'll love today.</p></div></aside>;
}