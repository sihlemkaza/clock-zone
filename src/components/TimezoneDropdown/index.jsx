import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import './TimezoneDropdown.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setTimezone } from '../../redux/features/timezone';

function TimezoneDropdown() {
  const dispatch = useDispatch();
  const timezoneValue = useSelector((state) => state.timezoneReducer.value);
  const [timezoneList, setTimezoneList] = useState([]);

  function handleZone(event) {
    dispatch(setTimezone(event.target.value));
  }
  
  function renderZoneSelect() {
    return <select 
      id='timezone-select'
      value={timezoneValue} 
      onChange={handleZone}>
      {
        timezoneList.map((zoneValue, index) =>(
          <option value={zoneValue} key={index}>
            {zoneValue}
          </option>
        ))
      }
    </select>
  }

  useEffect(() => {
    const tzList = Intl.supportedValuesOf('timeZone');
    setTimezoneList(tzList);
  },[]);

  return (
    <div className='timezone-dropdown'>
      {renderZoneSelect()}
    </div>
  )
}

export default TimezoneDropdown