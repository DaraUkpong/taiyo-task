import { configureStore } from "@reduxjs/toolkit";
import { contactsDataSLice } from "./contactReducer";

export const store = configureStore({
  reducer: {
    contactsData: contactsDataSLice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
