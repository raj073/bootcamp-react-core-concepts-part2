import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      Counter: {count}
      <br />
      <br />
      <div>
        <button onClick={handleIncrease}>Increase</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleDecrease}>Decrease</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
