import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light',
    color: 'blue',
  },
  reducers: {
    setThemeMode: (state, action) => {
      state.mode = action.payload;
    },
    setThemeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setThemeMode, setThemeColor } = themeSlice.actions;

export default themeSlice.reducer;
