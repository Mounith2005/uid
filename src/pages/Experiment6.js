import React, { useState } from 'react';

function Experiment6() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [items, setItems] = useState([]);

  function toInt(value) {
    const n = parseInt(value, 10);
    return Number.isNaN(n) || n < 1 ? 1 : n;
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !description.trim()) return;
    const item = {
      id: Date.now().toString(),
      name: name.trim(),
      description: description.trim(),
      quantity: toInt(quantity)
    };
    setItems((prev) => [item, ...prev]);
    setName('');
    setDescription('');
    setQuantity('1');
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  return (
    <main className="container" style={{ padding: 24 }}>
      <h2>Experiment 6: Add Items to List</h2>
      <form className="form additem" onSubmit={onSubmit}>
        <div className="form__row">
          <label className="form__label">Name</label>
          <input className="form__input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item name" required />
        </div>
        <div className="form__row">
          <label className="form__label">Description</label>
          <textarea className="form__input" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description" required />
        </div>
        <div className="form__row">
          <label className="form__label">Quantity</label>
          <input className="form__input" type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <button className="btn btn--primary" type="submit">Add Item</button>
      </form>

      <section className="items">
        <h3>Items</h3>
        {items.length === 0 ? (
          <p>No items yet.</p>
        ) : (
          <ul className="items__list">
            {items.map((it) => (
              <li key={it.id} className="items__item">
                <div className="items__main">
                  <strong>{it.name}</strong>
                  <span className="items__qty">Qty: {it.quantity}</span>
                </div>
                <p className="items__desc">{it.description}</p>
                <button className="btn" onClick={() => removeItem(it.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default Experiment6;


