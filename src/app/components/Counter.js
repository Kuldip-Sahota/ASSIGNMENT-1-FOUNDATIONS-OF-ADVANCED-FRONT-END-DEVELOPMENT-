'use client';  // Indicates this file is a client-side component in Next.js

import { useState } from 'react';  // Import useState hook for managing state

const Counter = () => {
  const [count, setCount] = useState(0);  // Declare a state variable 'count' with initial value 0

  const increment = () => setCount(count + 1);  // Function to increase 'count' by 1
  const decrement = () => setCount(count - 1);  // Function to decrease 'count' by 1

  return (
    <div>
      <h2>Counter: {count}</h2>  {/* Display the current count */}
      <button onClick={increment}>Increase</button>  {/* Button to increase count */}
      <button onClick={decrement}>Decrease</button>  {/* Button to decrease count */}
    </div>
  );
};

export default Counter;  // Export the Counter component for use in other parts of the app
