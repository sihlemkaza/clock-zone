import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

function TimezoneDropdown() {
  const [timeZones, setTimeZones] = useState([]);
  const [currentZone, setCurrentZone] = useState('');

  function handleZone(event) {
    setCurrentZone(event.target.value);
  }
  
  function renderZoneSelect() {
    return <select 
      id='timezone-select'
      value={currentZone} 
      onChange={handleZone}>
      {
        timeZones.map((zoneValue, index) =>(
          <option value={zoneValue} key={index}>
            {zoneValue}
          </option>
        ))
      }
    </select>
  }

  useEffect(() => {
    const tempDT = DateTime.now();
    const defaultZone = tempDT.zoneName;
    !currentZone && setCurrentZone(defaultZone);

    const tzList = Intl.supportedValuesOf('timeZone');
    setTimeZones(tzList);
  },[]);

  return (
    <div className='timezone-dropdown'>
      {renderZoneSelect()}
    </div>
  )
}

export default TimezoneDropdown