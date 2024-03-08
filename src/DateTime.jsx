import  { useState, useEffect } from 'react';
import "./DateTime.css";
const DateTime= () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  const formattedDateTime = currentDateTime.toLocaleTimeString([], {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    // hour12: false, // Set to false to use a 24-hour format
  });
  const formattedDate = currentDateTime.toLocaleDateString(undefined, {
    weekday: 'long', // Display the full weekday name
    day: 'numeric',
    month: 'long', // Display the full month name
    year: 'numeric',
  });

  return (
    <div className='DateTime'>
      <div style={{ fontSize: '30px' }}>{formattedDateTime}</div>
      <div>{formattedDate}</div>
    </div>
  );
};

export default DateTime;