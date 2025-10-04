import React, { useState } from "react";
import "./EnquiryForm.css";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // your WhatsApp number with country code (no + or spaces)
  const WHATSAPP_NUMBER = "917030455587"; // change to your number

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // Construct WhatsApp message
    const text = `New Enquiry 👋%0A
Name: ${name}%0A
Email: ${email}%0A
Phone: ${phone}%0A
Message: ${message}`;

    // Open WhatsApp chat with pre-filled message
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="enquiry-container">
      <h2 className="enquiry-title">Enquiry Form</h2>
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Send via WhatsApp</button>
      </form>
    </div>
  );
};

export default EnquiryForm;
