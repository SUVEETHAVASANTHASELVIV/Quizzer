import React, { useState } from 'react';

const Time = () => {
  const date = new Date();
  let startTime = 0;

  const handle = () => {
    const cur = new Date();
    const difference = cur.getTime() - date.getTime(); // Get the time difference in milliseconds
    console.log(`Time difference: ${difference}ms`);
    startTime = difference; // Store the difference for further reference
    convertTime(startTime); // Convert and display the time
  };

  const convertTime = (timeInMilliseconds) => {
    const minutes = Math.floor(timeInMilliseconds / 60000); // Convert milliseconds to minutes
    const seconds = ((timeInMilliseconds % 60000) / 1000).toFixed(0); // Convert remaining milliseconds to seconds

    console.log(`${minutes} minutes and ${seconds} seconds`);
    // You can display this information in your UI or store it in state for rendering
  };

  return (
    <>
      <button onClick={handle}>Click me</button>
    </>
  );
};

export default Time;
