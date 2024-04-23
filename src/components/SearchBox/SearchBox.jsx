import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { useState } from "react";

export default function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    dispatch(setStatusFilter(value));
  };

  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.inputArea}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter contact..."
      />
    </div>
  );
}
