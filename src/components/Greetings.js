import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const randomGreeting = useSelector((state) => state.greeting.randomGreeting);
  
  return (
    <div>
      <h2>Greeting</h2>
      <p>{randomGreeting}</p>
    </div>
  );
};
  
export default Greeting;
