 import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
export default function BrandingForm() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    clientName: '',
    logo: null,
    colorPreference: '',
    pictures: [],
    contactInfo: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'logo') {
      setFormData({ ...formData, logo: files[0] });
    } else if (name === 'pictures') {
      setFormData({ ...formData, pictures: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('clientName', formData.clientName);
    data.append('logo', formData.logo);
    data.append('colorPreference', formData.colorPreference);
    data.append('contactInfo', formData.contactInfo);
    formData.pictures.forEach((pic) => {
      data.append(`pictures`, pic);
    });

    try {
      const response = await fetch(`https://onboardback.onrender.com/api/client-details/${id}`, {
        method: 'POST',
        body: data
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('✅ Details submitted successfully!');
      } else {
        toast.error(result.message || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('❌ Something went wrong');
    }
  };

  return (
    <div className="branding-form-container">
      <h2 className="form-title">Provide Your Branding Details</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="branding-form">
        <div className="form-group">
          <label htmlFor="clientName">Name or Company Name</label>
          <input
            type="text"
            name="clientName"
            id="clientName"
            value={formData.clientName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="logo">Upload Your Logo</label>
          <input type="file" name="logo" id="logo" accept="image/*" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="colorPreference">Preferred Color Scheme</label>
          <input
            type="text"
            name="colorPreference"
            id="colorPreference"
            value={formData.colorPreference}
            onChange={handleChange}
            placeholder="e.g., Blue and White"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pictures">Upload Additional Pictures (optional)</label>
          <input
            type="file"
            name="pictures"
            id="pictures"
            accept="image/*"
            multiple
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactInfo">Contact Information</label>
          <textarea
            name="contactInfo"
            id="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            placeholder="Email, Phone, Address, etc."
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit Branding Details</button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
