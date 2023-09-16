import React, { useState, useEffect } from 'react';

function ClientDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // fetch bookings from API and update state
  }, []);

  return (
    <div>
      <h2>Client Dashboard</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            <span>{booking.date}</span>
            <span>{booking.providerName}</span>
            <span>{booking.serviceType}</span>
            <span>{booking.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientDashboard;