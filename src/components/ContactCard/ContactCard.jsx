import React from 'react';
import './contactcard.css'
const ContactCard = ({ name, phone, email }) => {
  return (
    <div className= "contact-card">
      <h2>{name}</h2>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default ContactCard;
//style={{ border: '1px solid #ddd', padding: '20px', margin: '20px', textAlign: 'center' }}
