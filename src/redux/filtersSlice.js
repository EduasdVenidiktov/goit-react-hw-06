import { createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => {
  const searchTerm = state.filters.searchTerm.toLowerCase();
  const contacts = selectContacts(state); // Використання селектора для отриманя списку контактів

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm)
  );
};

export default filtersSlice.reducer;
