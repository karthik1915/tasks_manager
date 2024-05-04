import { createSelector, createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  //  Default Theme of the application
  isDarkMode: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const selectTheme = createSelector(
  (state: { theme: ThemeState }) => state.theme.isDarkMode,
  (isDarkMode) => isDarkMode
);

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
