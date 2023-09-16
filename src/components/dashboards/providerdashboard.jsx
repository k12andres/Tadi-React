import React, { useState, useEffect } from 'react';

function ProviderDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // fetch appointments from API and update state
  }, []);

  return (
    <div>
      <h2>Provider Dashboard</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            <span>{appointment.date}</span>
            <span>{appointment.clientName}</span>
            <span>{appointment.serviceType}</span>
            <span>{appointment.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProviderDashboard;