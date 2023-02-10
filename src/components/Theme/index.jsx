import React from 'react';
import { Icon } from '@iconify/react';
import './Theme.scss';

function Theme() {
  return (
    <div className='theme'>
      <button>
        <Icon className='light' icon="ri:sun-line" />
        Light
      </button>
      <button>
        <Icon className='dark' icon="ph:moon" />
        Dark
      </button>
    </div>
  )
}

export default Theme