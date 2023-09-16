import { useState } from 'react';

function BookingComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const services = [
    { name: 'Lawn mowing', price: 50 },
    { name: 'Weeding', price: 30 },
    { name: 'Trimming', price: 40 },
    { name: 'Fertilizing', price: 60 },
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Call API to check provider's availability for the selected date
    // and update available services and prices accordingly.
  };

  const handleServiceChange = (service) => {
    setSelectedService(service);
    setTotalPrice(service.price);
  };

  const handleClientInfoChange = (e) => {
    setClientInfo({
      ...clientInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to create a new booking with the selected provider
    // and client information, and redirect to confirmation page.
  };

  return (
    <div className="booking-container">
      <h2>Book lawn care services</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date-picker">Select a date:</label>
        <input
          type="date"
          id="date-picker"
          onChange={(e) => handleDateChange(e.target.value)}
        />

        <label htmlFor="service-select">Select a service:</label>
        <select
          id="service-select"
          onChange={(e) =>
            handleServiceChange(
              services.find((s) => s.name === e.target.value)
            )
          }
        >
          <option value="">Select a service</option>
          {services.map((service, index) => (
            <option key={index} value={service.name}>
              {service.name} (${service.price})
            </option>
          ))}
        </select>

        <label htmlFor="total-price">Total price:</label>
        <input
          type="text"
          id="total-price"
          value={`$${totalPrice}`}
          readOnly
        />

        <h3>Client information:</h3>
        <label htmlFor="client-name">Name:</label>
        <input
          type="text"
          id="client-name"
          name="name"
          value={clientInfo.name}
          onChange={handleClientInfoChange}
          required
        />

        <label htmlFor="client-email">Email:</label>
        <input
          type="email"
          id="client-email"
          name="email"
          value={clientInfo.email}
          onChange={handleClientInfoChange}
          required
        />

        <label htmlFor="client-phone">Phone number:</label>
        <input
          type="tel"
          id="client-phone"
          name="phone"
          value={clientInfo.phone}
          onChange={handleClientInfoChange}
          required
        />

        <label htmlFor="client-address">Address:</label>
        <input
          type="text"
          id="client-address"
          name="address"
          value={clientInfo.address}
          onChange={handleClientInfoChange}
          required
        />

        <button type="submit">Book now</button>
      </form>
      </div>
  );
}

export default BookingComponent;