import React, { useEffect, useState } from 'react';

export const Seconds = ({ seconds }) => {
  const [currentHours, setCurrentHours] = useState('00');
  const [currentMins, setCurrentMins] = useState('00');
  const [currentSeconds, setCurrentSeconds] = useState('00');

  const formatTime = (receivedSeconds) => {
    let hrs = Math.floor(receivedSeconds / 3600);
    let mins = Math.floor((receivedSeconds - hrs * 3600) / 60);
    let secs = receivedSeconds - hrs * 3600 - mins * 60;

    if (hrs < 10) {
      hrs = `0${hrs}`;
    }
    if (mins < 10) {
      mins = `0${mins}`;
    }
    if (secs < 10) {
      secs = `0${secs}`;
    }

    return { hrs, mins, secs };
  };

  useEffect(() => {
    let newSeconds = seconds;

    const interval = setInterval(() => {
      if (newSeconds === 0) {
        return;
      } else {
        newSeconds = newSeconds - 1;
        const { hrs, mins, secs } = formatTime(newSeconds);
        setCurrentHours(hrs);
        setCurrentMins(mins);
        setCurrentSeconds(secs);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <h1>
      {currentHours}:{currentMins}:{currentSeconds}
    </h1>
  );
};

Seconds.defaultProps = {
  seconds: 0,
};
