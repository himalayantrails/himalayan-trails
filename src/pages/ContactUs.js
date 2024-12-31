import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "Trek"
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    emailjs
      .send(
        "service_spg40vw",
        "template_5fa3o9x",
        formData,
        "RqpPvrZ-BehGIB0aB"
      )
      .then(
        () => {
          setSuccessMessage("Thank you for reaching out! We'll get back to you soon.");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send email.");
        }
      );
    setFormData({ name: "", email: "", message: "Trek" });
  };

  return (
    <div className="contact-us-container">
      <h2 style={{ color: "#555" }}>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Contacting For:</label>
          <select id="subject" required
            name="subject" value={formData.subject} onChange={handleChange}>
            <option value="Trek">Trek</option>
            <option value="Job Application">Job Application</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default ContactUs;
