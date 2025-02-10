'use client';  // Indicates this file is a client-side component in Next.js

import { useState } from 'react';  // Import the useState hook to manage state

const Form = () => {
  const [name, setName] = useState('');  // Declare state variable 'name' with an initial empty string

  const handleChange = (e) => setName(e.target.value);  // Update 'name' state when the input changes
  const handleSubmit = (e) => {  // Handle form submission
    e.preventDefault();  // Prevents page reload
    alert(`Form submitted with name: ${name}`);  // Display the name entered in an alert
  };

  return (
    <form onSubmit={handleSubmit}>  {/* Attach the submit handler to the form */}
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />  {/* Input field for name with onChange event */}
      <button type="submit">Submit</button>  {/* Submit button to trigger form submission */}
    </form>
  );
};

export default Form;  // Export the Form component for use in other parts of the app
