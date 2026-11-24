import React from "react";
import { useNavigate } from "react-router-dom";
const items = [{name:"Electronics",icon:"🎧",desc:"Smart tech for everyday life."},{name:"Fashion",icon:"👕",desc:"Easy styles you'll reach for."},{name:"Shoes",icon:"👟",desc:"Comfort from the ground up."},{name:"Accessories",icon:"⌚",desc:"The finishing touches."},{name:"Home Appliances",icon:"💡",desc:"Make home feel even better."}];
export default function Categories({ onSelect }) {
  const navigate = useNavigate();

  function chooseCategory(category) {
    onSelect(category);
    navigate("/products");
  }

  return <section className="inner-page"><span className="eyebrow">EXPLORE YOUR STYLE</span><h1>Shop by category</h1><p className="page-intro">A place for every kind of find.</p><div className="category-grid">{items.map(item => <button className="category-card" key={item.name} onClick={() => chooseCategory(item.name)}><span>{item.icon}</span><h3>{item.name}</h3><p>{item.desc}</p><span className="category-link">Explore collection →</span></button>)}</div></section>;
}