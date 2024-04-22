import { useState, useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

// import useContact from "../useContact.json";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "./redux/filtersSlice";
import { selectContacts } from "./redux/contactsSlice";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  useDispatch();
  // const contacts = useSelector((state) => state.contacts.items);
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectNameFilter);

  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   return savedContacts || useContact;
  // });

  // // Функція для фільтрації контактів за ім'ям
  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // // Функція для видалення контакту, обгорнута в useCallback
  // const deleteContact = useCallback((id) => {
  //   setContacts((prevContacts) =>
  //     prevContacts.filter((contact) => contact.id !== id)
  //   );
  // }, []); // Залежності не вказані, оскільки функція не має зовнішніх залежностей

  // // Функція для додавання нового контакту
  // const addContact = useCallback((newContact) => {
  //   setContacts((prevContacts) => [...prevContacts, newContact]);
  // }, []);

  // Ефект для збереження стану в локальне сховище
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchTerm} onChange={setSearchTerm} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

//=======================================================================================
// import { useState, useEffect, useCallback } from "react";

// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";

// import useContact from "../useContact.json";
// import css from "./App.module.css";

// export default function App() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [contacts, setContacts] = useState(() => {
//     const savedContacts = JSON.parse(localStorage.getItem("contacts"));
//     return savedContacts || useContact;
//   });

//   // Функція для фільтрації контактів за ім'ям
//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Функція для видалення контакту, обгорнута в useCallback
//   const deleteContact = useCallback((id) => {
//     setContacts((prevContacts) =>
//       prevContacts.filter((contact) => contact.id !== id)
//     );
//   }, []); // Залежності не вказані, оскільки функція не має зовнішніх залежностей

//   // Функція для додавання нового контакту
//   const addContact = useCallback((newContact) => {
//     setContacts((prevContacts) => [...prevContacts, newContact]);
//   }, []);

//   // Ефект для збереження стану в локальне сховище
//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm onAddContact={addContact} />
//       <SearchBox value={searchTerm} onChange={setSearchTerm} />
//       <ContactList contacts={filteredContacts} onDelete={deleteContact} />
//     </div>
//   );
// }
