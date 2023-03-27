import { useState } from 'react';
import styles from "./search.module.css";

import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [keyword, setKeyword] = useState("")

  const onChange = (value: string) => {
    setKeyword(value)
  };

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit">
        <SearchIcon className={styles.icon} />
      </button>
    </div>
  );
}

export default SearchBar;
