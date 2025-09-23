import React, { useState } from 'react';

function BookingForm({ selectedCar }) {
  const [name, setName] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const summary = `Booking confirmed for ${selectedCar ? selectedCar.name : 'a car'}\nName: ${name}\nPickup: ${pickupDate}\nReturn: ${returnDate}`;
    alert(summary);
  }

  return (
    <section id="booking" className="booking container">
      <h2>Book Your Ride</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__row">
          <label className="form__label">Full Name</label>
          <input className="form__input" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required />
        </div>
        <div className="form__row">
          <label className="form__label">Pickup Date</label>
          <input className="form__input" type="date" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} required />
        </div>
        <div className="form__row">
          <label className="form__label">Return Date</label>
          <input className="form__input" type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn--primary">Confirm Booking</button>
      </form>
    </section>
  );
}

export default BookingForm;


