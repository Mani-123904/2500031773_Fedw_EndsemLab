import React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, UserRound, ShoppingCart } from "lucide-react";

export default function Header({ search, setSearch, cartCount }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand"><span className="brand-mark"><ShoppingBag size={22} /></span><span>shop<span className="brand-accent">nest</span></span></Link>
        <label className="search-box">
          <Search size={18} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..." aria-label="Search products" />
        </label>
        <div className="header-actions">
          <button className="header-action" type="button" onClick={() => alert("Login page can be connected here.")}><UserRound size={19} /><span>Login</span></button>
          <button className="header-action cart-action" type="button" onClick={() => alert(`You have ${cartCount} item(s) in your cart.`)}><ShoppingCart size={19} /><span>Cart</span>{cartCount > 0 && <b className="cart-count">{cartCount}</b>}</button>
          <button className="icon-only" type="button" aria-label="Account" onClick={() => alert("Your account area can be connected here.")}><UserRound size={20} /></button>
        </div>
      </div>
    </header>
  );
}