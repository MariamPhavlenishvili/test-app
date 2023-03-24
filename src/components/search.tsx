import React from "react";
import styles from "./search.module.css";

import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder="Search..." />
      <button type="submit">
        <SearchIcon className={styles.icon}/>
      </button>
    </div>
  );
}

export default SearchBar;
