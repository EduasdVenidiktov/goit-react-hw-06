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
  // const contacts = state.contacts.items;
  const contacts = selectContacts(state); // Использование селектора для получения списка контактов

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm)
  );
};

export default filtersSlice.reducer;
//=====================================================================
// import { createSlice } from "@reduxjs/toolkit";

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: {
//     name: "",
//   },
//   reducers: {
//     setStatusFilter(state, action) {
//       state.name = action.payload;
//     },
//   },
// });

// export const { setStatusFilter } = filtersSlice.actions;

// export const selectNameFilter = (state) => state.filters.name;

// export default filtersSlice.reducer;
