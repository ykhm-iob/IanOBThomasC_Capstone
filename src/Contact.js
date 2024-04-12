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
    <div className="max-w-96 m-auto text-center mt-40">
      <h2 className="mb-8 text-xl text-titleColor">Send Me a Message!</h2>
      <form onSubmit={handleSubmit}>
        <label className="text-left block">Email:</label>
        <input className="w-full pt-1.5 pr-2.5 mt-2.5 border box-border block border-borderColor" 
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-left block">Message:</label>
        <textarea className="w-full pt-1.5 pr-2.5 mt-2.5 border box-border block border-borderColor"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="button">
          Submit
        </button>
      </form>
    </div>
   );
}
 
export default Contact;