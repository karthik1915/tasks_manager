import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

export interface RouteState {
  route: "dashboard" | "tasks" | "schedule" | "settings";
}

const initialState: RouteState = {
  route: "dashboard",
};

const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    updateRoute: (state, action: PayloadAction<RouteState>) => {
      state.route = action.payload.route;
    },
  },
});

export const currentRoute = createSelector(
  (state: { route: RouteState }) => state.route.route,
  (routename) => routename,
);

export const { updateRoute } = routeSlice.actions;

export default routeSlice.reducer;
