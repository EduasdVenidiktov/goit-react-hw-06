import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const searchContact = useSelector((state) => state.filters.searchContact);
  const handleInputChange = (event) => {
    const value = event.target.value;
    dispatch(setStatusFilter(value));
  };

  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        placeholder="Search contacts"
        value={searchContact}
        onChange={handleInputChange}
      />
    </div>
  );
}
