import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
export default function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e) { e.preventDefault(); setSent(true); e.target.reset(); }
  return <section className="inner-page"><span className="eyebrow">WE'RE HERE TO HELP</span><h1>Get in touch</h1><p className="page-intro">Have a question or suggestion? Send us a message.</p><div className="contact-layout"><div className="contact-details"><h2>Say hello</h2><p><Mail /> hello@shopnest.example</p><p><Phone /> +91 98765 43210</p><p><MapPin /> Markapur, Andhra Pradesh, India</p></div><form className="contact-form" onSubmit={submit}><label>Your name<input required placeholder="Enter your name" /></label><label>Email address<input type="email" required placeholder="you@example.com" /></label><label>Message<textarea required rows="5" placeholder="How can we help?" /></label><button className="primary-button" type="submit">Send message</button>{sent && <p className="success-message">Thanks! Your message has been received (demo).</p>}</form></div></section>;
}