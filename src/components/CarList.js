import React from 'react';
import CarCard from './CarCard';

function CarList({ cars, onSelect }) {
  return (
    <section id="cars" className="car-list container">
      <h2>Popular Cars</h2>
      <div className="car-list__grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} onSelect={onSelect} />
        ))}
      </div>
    </section>
  );
}

export default CarList;


