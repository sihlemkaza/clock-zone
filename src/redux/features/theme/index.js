import { createSlice } from '@reduxjs/toolkit';

const themeStyles = (themeValue) => {
  const defaultStyles = {
    color: 'black',
    background: 'white'
  }

  switch(themeValue) {
    case 'light':
      return defaultStyles;
    case 'dark': 
      defaultStyles.color = 'white';
      defaultStyles.background = 'black';
      return defaultStyles;
    default:
      return defaultStyles;
  }
}

const initialStateValue = {
  value: themeStyles.light
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialStateValue,
  reducers: {
    resetTheme: (state) => { state.value = initialStateValue },
    setTheme: (state, action) => {
      state.value = themeStyles[action.payload];
    }
  }
});

export const { resetTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;