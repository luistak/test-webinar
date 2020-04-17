import React, { useState } from 'react';

const ItemQuantity = ({ min = 0, max = 10, initialCount = 0, onChange, ...opts }) => {
  const [quantity, setQuantity] = useState(0);
  const [touched, setTouched] = useState(false);

  const handleChange = ({ target: { value } }) => {
    const newQuantity = Number(value);

    setQuantity(newQuantity);
    if (!touched) setTouched(true);
    if (onChange) onChange(newQuantity);
  }

  const isValid = !touched || (quantity >= min && quantity <= max);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="item-quantity">Qtd Items</label> 
      <input
        id="item-quantity"
        type="number"
        value={quantity}
        onChange={handleChange}
        {...opts}
      />
      {!isValid && <span role="alert">Invalid quantity</span> }
    </div>
  );
};

export default ItemQuantity;
