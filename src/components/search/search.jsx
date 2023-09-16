import React, { useState } from 'react';

function Search() {
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const [availability, setAvailability] = useState('');
  const [rating, setRating] = useState('');

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleServiceChange(event) {
    setService(event.target.value);
  }

  function handleAvailabilityChange(event) {
    setAvailability(event.target.value);
  }

  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add code to search for providers based on the selected criteria
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" value={location} onChange={handleLocationChange} />
      </div>
      <div className="form-group">
        <label htmlFor="service">Service</label>
        <select id="service" value={service} onChange={handleServiceChange}>
          <option value="">Select a service</option>
          <option value="lawn mowing">Lawn mowing</option>
          <option value="lawn fertilization">Lawn fertilization</option>
          <option value="tree trimming">Tree trimming</option>
          <option value="pest control">Pest control</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="availability">Availability</label>
        <select id="availability" value={availability} onChange={handleAvailabilityChange}>
          <option value="">Select availability</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="rating">Minimum Rating</label>
        <select id="rating" value={rating} onChange={handleRatingChange}>
          <option value="">Select rating</option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
