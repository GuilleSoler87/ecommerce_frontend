import React, { useState } from 'react';
import './Counter.scss';

const Counter = (props) => {
  const [counter, setCounter] = useState(props.initialValue);

  const handleIncrement = () => {
    setCounter(counter + props.incrementBy);
  }

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - props.incrementBy);
    }
  }

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={handleDecrement}>-</button>
      <span className="counter-value">{counter}</span>
      <button className="counter-button" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Counter;
