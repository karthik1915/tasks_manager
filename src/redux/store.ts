import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./features/themes/themeReducer";
import { routeSlice } from "./features/route/routeReducer";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    route: routeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
