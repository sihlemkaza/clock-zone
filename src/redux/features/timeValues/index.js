import { createSlice } from '@reduxjs/toolkit';
import { DateTime } from 'luxon';

const initialStateValue = {
  value: DateTime.now().zoneName
}

export const timezoneSlice = createSlice({
  name: 'timezone',
  initialState: initialStateValue,
  reducers: {
    resetTimezone: (state) => { state.value = initialStateValue },
    setTimezone: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { resetTimezone, setTimezone } = timezoneSlice.actions;
export default timezoneSlice.reducer;