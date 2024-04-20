import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlice";
import filtersSlice from "./filtersSlice";

const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filters: filtersSlice.reducer,
  },
});

export default store;
