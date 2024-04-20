import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  // Об'єкт редюсерів
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload]; //кращій варіант, створює новиц масив, відповідає принципу незмінності immutability
      //или
      // state.push(action.payload);
    },
    prepare(text) {
      return {
        payload: {
          text,
          id: nanoid(),
          completed: false,
        },
      };
    },
  },

  deleteContact: (state, action) => {
    return state.items.filter((item) => item.id !== action.payload);
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export default contactsSlice;
// export const getContactsLs = (state) => state.contacts; //отримання стану з LS
