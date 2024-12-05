import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginTop: '50px' }}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" /><br />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br />
      <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
