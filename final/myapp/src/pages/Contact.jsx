import React, { useState } from "react";
import ThankYou from "../img/thank-you.jpg";
import "../styles/Contact.css";

function Contact() {
  let [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  let [showUser, setShowUser] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((elements) => ({
      ...elements,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowUser(!showUser);
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ThankYou})` }}
      ></div>
      <div className="rightSide">
        <p className="contactUsTitle"> Contact Us</p>

        <form onSubmit={handleSubmit}>
       
          <label htmlFor="name">Full Name*</label>
          <input
            name="name"
            placeholder="Enter full name..." required
            type="text"
            value={contactData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email*</label>
          <input
            name="email" 
            placeholder="Enter email..."
            type="email"
            value={contactData["email"]}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            value={contactData["message"]}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>

      <div className={showUser ? "showDiv" : "hideDiv"}>
        <div className="OptionalMessage">
          <div>Name: {contactData.name}</div>
          <div>Email: {contactData.email}</div>
          <div>Message: {contactData.message}</div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Contact;
