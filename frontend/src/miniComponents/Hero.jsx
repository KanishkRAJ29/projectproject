import React from "react";
import {Link } from "react-router-dom"
const Hero=()=>{
  return <section className="hero">
    <div className="banner">
      <h1>Volunteers</h1>
      <h3>Needed</h3>
      <p>Making a difference starts with you! Join us in bringing hope, care, and smiles to those in need. Whether it's lending a helping hand, sharing your skills, or simply spreading awareness, every effort counts.

Together, we can create a brighter future for those less fortunate. Sign up today and become part of a compassionate community working towards change.</p>
      <Link to={"/donate"} className="btn"> Donate Now</Link>
    </div>
    <div className="banner">
      <img src="/hero.png" alt="hero" />
    </div>
  
  </section>
}
export default Hero;