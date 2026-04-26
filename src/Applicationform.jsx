import React, { useState } from 'react';
import DataTable from './DataTable'; // Dusra component import kela


const ApplicationForm = () => {
  const [applications, setApplications] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Web Developer',
    experience: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplications([...applications, formData]); // Data array madhe takla
    
    // Form reset karne
    setFormData({
      fullName: '', email: '', phone: '', position: 'Web Developer', experience: '', message: ''
    });
    alert("Application table madhe save zali!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-700 p-6 text-white text-center">
          <h1 className="text-2xl font-bold uppercase">SD IT Solutions</h1>
          <p className="text-sm opacity-90">Company Job Application</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} required onChange={handleChange} placeholder="Enter Name" />
          </div>

          <div className="grid">
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} required onChange={handleChange} placeholder="Email" />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} required onChange={handleChange} placeholder="Phone" />
            </div>
          </div>

          <div className="grid">
            <div className="input-group">
              <label>Position</label>
              <select name="position" value={formData.position} onChange={handleChange}>
                <option>Web Developer</option>
                <option>Python/Django Developer</option>
                <option>React Developer</option>
              </select>
            </div>
            <div className="input-group">
              <label>Experience</label>
              <input type="number" name="experience" value={formData.experience} onChange={handleChange} placeholder="Years" />
            </div>
          </div>

          <div className="input-group">
            <label>Why should we hire you?</label>
            <textarea name="message" value={formData.message} rows="3" onChange={handleChange}></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-600">Submit to SD IT Solutions</button>
        </form>
      </div>

      {/* --- TABLE COMPONENT CALL --- */}
      <DataTable data={applications} />
    </div>
  );
};

export default ApplicationForm;