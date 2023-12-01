// components/ContactForm.js
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    businesstype: "",
    howDidYouKnow: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://sheet.best/api/sheets/9a963e18-cfce-4ccd-8626-97a568dfe958', formData).then((response)=>{
            console.log(response)
            setFormData({})
        })
  };

  return (
    <div
      id="contact-form-section"
      className="rounded-2xl p-4 text-black mt-80 text-center flex-auto mb-11"
      style={{ backgroundColor: "#f47322" }}
    >
      <h2 className="text-2xl font-bold mb-2">Fill the form to contact</h2>
      <p>We will contact you back soon</p>
      <form className="mt-4 mb-2">
        {/* Row 1 */}
        <div className="flex mb-2">
          {" "}
          {/* Increased margin-bottom */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name-Surname"
            className="flex-1 rounded-l-md p-2"
          />
          
        </div>
        {/* Row 2 */}
        <div className="flex mb-2">
          {" "}
          {/* Increased margin-bottom */}
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="flex-1 rounded-l-md p-2"
          />
          
        </div>
        {/* Row 3 */}
        <div className="flex mb-2">
          {" "}
          {/* Increased margin-bottom */}
          <input
            type="text"
            name="businesstype"
            value={formData.businesstype}
            onChange={handleInputChange}
            placeholder="Business Type"
            className="flex-1 rounded-l-md p-2"
          />
        </div>
        <div className="mb-2">
          <select
            name="howDidYouKnow"
            value={formData.howDidYouKnow}
            onChange={handleInputChange}
            className="w-full rounded-md p-2"
          >
            <option value="" disabled selected>
              Where Did You Know About GPOS
            </option>
            <option value="Facebook">Facebook</option>
            <option value="Event">Event</option>
            <option value="Youtube">Youtube</option>
            <option value="Website">Website</option>
            <option value="Tiktok">Tiktok</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Row 7 (Submit Button) */}
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white rounded-md p-2 w-full" // Change button color
            style={{ backgroundColor: "blue" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
