'use client';  // Indicates this file is a client-side component in Next.js

import { useState } from 'react';  // Import the useState hook to manage state

const Message = () => {
  const [message, setMessage] = useState('Welcome to our site!');  // Declare state variable 'message' with initial value

  const changeMessage = () => setMessage('Thank you for visiting our site!');  // Function to change the message

  return (
    <div>
      <p>{message}</p>  {/* Display the current message */}
      <button onClick={changeMessage}>Change Message</button>  {/* Button to trigger the changeMessage function when clicked */}
    </div>
  );
};

export default Message;  // Export the Message component for use in other parts of the app
