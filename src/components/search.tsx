import { useState } from "react";
import styles from "./search.module.css";

import SearchIcon from "@mui/icons-material/Search";
import { dataHubService } from "data-hub";

function SearchBar() {
  const [keyword, setKeyword] = useState("");

  const onChange = (value: string) => {
    dataHubService.sendSearchQuery(value);
    setKeyword(value);
  };

  const onSearch = () => {
    dataHubService.sendSearchQuery(keyword);
  };

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
