import React from 'react';

function CarCard({ car, onSelect }) {
  return (
    <div className="car-card">
      <img className="car-card__image" src={car.image} alt={car.name} />
      <div className="car-card__body">
        <h3 className="car-card__title">{car.name}</h3>
        <p className="car-card__meta">{car.type} • {car.seats} seats • {car.transmission}</p>
        <div className="car-card__footer">
          <span className="car-card__price">${car.pricePerDay}/day</span>
          <button className="btn btn--secondary" onClick={() => onSelect(car)}>Select</button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;


