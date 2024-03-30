// ContactUs.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We value your feedback and suggestions. If you have any questions or
        need assistance, feel free to reach out to us at:
      </p>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> support@example.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
      </div>
      <form action="#" method="post">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="p-4 m-4 bg-gray-200"
        ></input>
        <input
          type="text"
          name="name"
          placeholder="message"
          className="p-4 m-4 bg-gray-200"
        ></input>
        <button className=" boder border-black rounded p-4 bg-green-200 m-4  ">
          Contact us
        </button>
      </form>
    </div>
  );
};

export default Contact;
