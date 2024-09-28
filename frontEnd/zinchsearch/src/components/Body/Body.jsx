import React from 'react'
import "./Body.css"

function Body({ email, onBack }) {
  console.log(email);
  return (
    <div>
        
        <button onClick={onBack}>Back</button>
        <h2>Date: {email.date}</h2>
        <h2>From: {email.from}</h2>
        <h2>To: {email.to}</h2>
        <h2>Cc: {email.cc}</h2>
        <h2>Subject: {email.subject}</h2>
        <p>Body: {email.body}</p> 
    </div>
);
}

export default Body