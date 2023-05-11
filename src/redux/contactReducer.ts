import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./store";

export interface DataState {
  contacts: Array<[]>;
  countries: Array<[]>;
  cases: Array<[]>;
}

const initialState: DataState = {
  contacts: [],
  countries: [],
  cases: [],
};

export const contactsDataSLice = createSlice({
  name: "contactData",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setCases: (state, action) => {
      state.cases = action.payload;
    },
  },
});

export const contacts = (state: RootState) => state.contactsData.contacts;
export const countries = (state: RootState) => state.contactsData.countries;
export const cases = (state: RootState) => state.contactsData.cases;
export const { setContacts, setCountries, setCases } =
  contactsDataSLice.actions;
export default contactsDataSLice.reducer;
