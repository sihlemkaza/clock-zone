import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import './Theme.scss';

function Theme() {
  const selectedTheme = localStorage.getItem('theme');
  const [currentTheme, setCurrentTheme] = useState('');

  if(selectedTheme) {
    document.querySelector('body').setAttribute('data-theme', selectedTheme);
  };

  function handleTheme(themeValue) {
    document.querySelector('body').setAttribute('data-theme', themeValue);
    localStorage.setItem('theme', themeValue);
    setCurrentTheme(themeValue);
  }

  useEffect(() => {
    selectedTheme && setCurrentTheme(selectedTheme);
  })

  return (
    <div className='theme'>
      <button
        className={`${currentTheme !== 'dark'? 'active' :''}`}
        onClick={() => handleTheme('light')}>
        <Icon className={'light-icon'} icon="ri:sun-line" />
        Light
      </button>
      <button
        className={`${currentTheme === 'dark'? 'active' :''}`}
        onClick={() => handleTheme('dark')}>
        <Icon className={'dark-icon'} icon="ph:moon" />
        Dark
      </button>
    </div>
  )
}

export default Theme