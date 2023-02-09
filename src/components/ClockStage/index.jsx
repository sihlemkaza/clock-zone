import React from 'react';
import './ClockStage.scss';

function ClockStage() {
  return (
    <div className='clock-stage'>
      <div className='timzone-label-container'>
        <div className='icon'>Icon</div>
        <label htmlFor='timezone-select'>timezone</label>
      </div>
      <span className='time-value'>00:30</span>
      <div className='date-container'>
        <span className='weekday'>Thursday,</span>
        <span className='date-value'>09 February 2023</span>
      </div>
    </div>
  )
}

export default ClockStage