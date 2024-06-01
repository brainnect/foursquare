// CurrentYear.js
import React, { useState, useEffect } from 'react';

const CurrentYear = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000 * 60 * 60 * 24); // Update every day

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return <span>{year}</span>;
};

export default CurrentYear;