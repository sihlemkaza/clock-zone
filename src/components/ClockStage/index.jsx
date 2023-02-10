import React from 'react';
import { Icon } from '@iconify/react';
import './ClockStage.scss';

function ClockStage() {
  return (
    <div className='clock-stage'>
      <label className='timzone-label-container' htmlFor='timezone-select'>
        <Icon 
          className='loc-icon' 
          icon="material-symbols:location-on-outline" 
        />
        timezone
      </label>
      <span className='time-value'>00:30</span>
      <div className='date-container'>
        <span className='weekday'>Thursday,</span>
        <span className='date-value'>09 February 2023</span>
      </div>
    </div>
  )
}

export default ClockStage