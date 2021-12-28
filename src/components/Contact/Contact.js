import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_8fkk8bq', 'template_5c6zxvl', e.target, 'user_Q4AEnio3HEMpwh8nPwRaf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div id="contact" className="contact">
      <h2>Contact me</h2>
      <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" id="email" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" className="form-control" rows="10" />
          </div>
        <button className="btn btn-primary" type="submit" value="Send Message">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;