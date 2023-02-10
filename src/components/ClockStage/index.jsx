import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import './ClockStage.scss';
import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import { getWeekday } from '../../utils';

function ClockStage() {
  const timezoneValue = useSelector((state) => state.timezoneReducer.value);
  const [currentTime, setCurrentTime] = useState('');
  const [currentWeekday, setCurrentWeekday] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  function twoDigit (numberValue = 0) {
    return numberValue.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
  }

  function handleDateTime() {
    const tempDT = DateTime.now().setZone(timezoneValue);
    setCurrentDate(tempDT.toFormat('dd MMMM yyyy'));
    setCurrentWeekday(getWeekday(tempDT.weekday));

    const hr = twoDigit(tempDT.hour);
    const min = twoDigit(tempDT.minute);
    const sec = twoDigit(tempDT.second);
    setCurrentTime(`${hr}:${min}:${sec}`);
  }

  useEffect(() => {
    !currentTime && handleDateTime();

    const intervalId = setInterval(handleDateTime, 1000);
    return () => {
      clearInterval(intervalId);
    }
  }, [timezoneValue])

  return (
    <div className='clock-stage'>
      <label className='timzone-label-container' htmlFor='timezone-select'>
        <Icon 
          className='loc-icon' 
          icon="material-symbols:location-on-outline" 
        />
        {timezoneValue}
      </label>
      <span className='time-value'>{currentTime}</span>
      <div className='date-container'>
        <span className='weekday'>{currentWeekday},</span>
        <span className='date-value'>{currentDate}</span>
      </div>
    </div>
  )
}

export default ClockStage