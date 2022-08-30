import { React, useState } from 'react'
 
const ItemCount = () => {

  const [carrito, setCarrito] = useState(0);
 
  //increase carrito
  const increase = () => {
    setCarrito(count => count + 1);
  };
 
  //decrease carrito
  const decrease = () => {
    setCarrito(count => count - 1);
  };
 
  return (
    <div className="counter__container">
      <h1>Jordan Retro IV</h1>
      <span className="counter__output">{carrito}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="control__btn" onClick={increase}>+</button>
      </div>
    </div>
    );
}

export default ItemCount;