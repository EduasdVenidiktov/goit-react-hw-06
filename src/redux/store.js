import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import filtersReducer from "./filtersSlice";
//імпортуємо внутрішні екшини redux
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], //ігноруємо внутрішні екшини redux
      },
    }),
});

export const persistor = persistStore(store);

export default store;
