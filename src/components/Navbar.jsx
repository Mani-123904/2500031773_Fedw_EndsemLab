import React from "react";
import { NavLink } from "react-router-dom";
const links = [["Home", "/"], ["Products", "/products"], ["Categories", "/categories"], ["About Us", "/about"], ["Contact Us", "/contact"]];
export default function Navbar() {
  return <nav className="navbar"><div className="nav-inner">{links.map(([label, path]) => <NavLink key={path} to={path} end={path === "/"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{label}</NavLink>)}</div></nav>;
}