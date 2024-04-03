import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const contactMessage = { email, message };
    console.log(contactMessage);
  }

  return ( 
    <div className="contact">
      <h2>Send Me a Message!</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input 
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message:</label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button>
          Submit
        </button>
      </form>
    </div>
   );
}
 
export default Contact;