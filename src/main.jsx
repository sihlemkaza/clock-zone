import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import themeReducer from './redux/features/theme';
import timezoneReducer from './redux/features/timezone';

const store = configureStore({
  reducer: {
    timezoneReducer, themeReducer
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
