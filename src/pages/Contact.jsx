import React from "react";
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>CONTACT US</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="Full Name"></label>
          <input name="name" placeholder="Enter Full Name..." type="text" />
          <label htmlFor="Email"></label>
          <input name="name" placeholder="Enter Email" type="email" />
          <label htmlFor="Message">Message</label>
          <textarea
            name="Message"
            required
            rows="6"
            placeholder="Enter Message..."
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
