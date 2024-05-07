import { AuthState } from "@/constants/authState";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import { User } from "firebase/auth";

const initialState: AuthState = {
  user: null,
  loading: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.loading = false;
    },
    updateUserInfoError: (
      state,
      action: PayloadAction<FirebaseError | unknown>,
    ) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const selectUserInfo = createSelector(
  (state: AuthState) => state.user,
  (user) => user,
);

export const { updateUserInfo, updateUserInfoError } = authSlice.actions;

export default authSlice.reducer;
