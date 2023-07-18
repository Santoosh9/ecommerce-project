import { configureStore } from "@reduxjs/toolkit";

//
import AuthReducer from "../store/auth";

//
export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


