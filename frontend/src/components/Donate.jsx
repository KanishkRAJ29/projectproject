import React from "react";
import { useState } from "react";
const Donate=()=>{
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [amount,setAmount]= useState("");
  const [message,setMessage]= useState("");
  const [disablebtn,setDisablebtn]= useState(false);


  return <section className="donate">
    <form >
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div>
        <label>Show your Love for Poor</label>
        <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter Donation Amount(USD)"/>
      </div>
      <input type="text"  value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Your Name"/>
      <input type="email"  value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email"/>
      
      <input type="text"  value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Message"/>
      <button type="submit" className="btn" disabled={disablebtn}> Donate {amount?`$${amount}` :"$0"}</button>
    </form>
  </section>
}

export default Donate;