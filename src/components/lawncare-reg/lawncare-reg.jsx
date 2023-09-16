import React, { useState } from 'react';

function LawnCareProviderRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState([]);
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleServiceChange = (event) => {
    const { value } = event.target;
    const index = services.indexOf(value);

    if (index > -1) {
      setServices([...services.slice(0, index), ...services.slice(index + 1)]);
    } else {
      setServices([...services, value]);
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would submit the form data to your backend server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Services:', services);
    console.log('Description:', description);

    // Reset the form fields
    setName('');
    setEmail('');
    setPhone('');
    setServices([]);
    setDescription('');
  };

  return (
    <div className="lawn-care-provider-registration">
      <h2>Register as a Lawn Care Provider</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="services">Services:</label>
          <select id="services" name="services" multiple={true} value={services} onChange={handleServiceChange}>
            <option value="Lawn Mowing">Lawn Mowing</option>
            <option value="Fertilization">Fertilization</option>
            <option value="Weed Control">Weed Control</option>
            <option value="Landscape Design">Landscape Design</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={description} onChange={handleDescriptionChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LawnCareProviderRegistration;
