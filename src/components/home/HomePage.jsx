import React, { useState } from "react";
function HomePage() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count === 10) {
      alert("reached max limit ");
      return;
    }
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  console.log("counter value", count);
  return (
    <div>
      Home Page
      <div>
        <p>Total Count = {count}</p>
        <div>
          <button onClick={handleIncrement}>Increment</button>
          <button style={{ marginLeft: "10px" }} onClick={handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

//  total count 0

//  increment

//  decrement
