import { useState } from 'react';
import styles from "./search.module.css";

import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [keyword, setKeyword] = useState("")

  const onChange = (value: string) => {
    window._dataHub.dataHubService.setSearchQuery(value)
    setKeyword(value)
  };

  const onSearch = () => {
    window._dataHub.dataHubService.setSearchQuery(keyword);
  }

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit" onClick={onSearch}>
        <SearchIcon className={styles.icon} />
      </button>
    </div>
  );
}

export default SearchBar;
