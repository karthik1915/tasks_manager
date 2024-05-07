import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/themes/themeReducer";
import routeSlice from "./features/route/routeReducer";
import authReducer from "./features/auth/authReducer";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    route: routeSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
