import React, { useState } from 'react';
import Hero from '../components/Hero';
import CarList from '../components/CarList';
import BookingForm from '../components/BookingForm';

function Home() {
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    {
      id: 1,
      name: 'Toyota Corolla',
      type: 'Sedan',
      seats: 5,
      transmission: 'Automatic',
      pricePerDay: 45,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Jeep Wrangler',
      type: 'SUV',
      seats: 5,
      transmission: 'Manual',
      pricePerDay: 80,
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Tesla Model 3',
      type: 'Electric',
      seats: 5,
      transmission: 'Automatic',
      pricePerDay: 120,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <>
      <Hero />
      <main>
        <CarList cars={cars} onSelect={setSelectedCar} />
        <BookingForm selectedCar={selectedCar} />
      </main>
    </>
  );
}

export default Home;


