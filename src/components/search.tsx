import { useState } from "react";
import styles from "./search.module.css";

import SearchIcon from "@mui/icons-material/Search";
// import { dataHubService, EventType } from "@tnet/dps";
import { dps, EventType } from "dps-local";

function SearchBar() {
  const [keyword, setKeyword] = useState("");

  const onChange = (value: string) => {
    dps.sendClickStream(value, EventType.SearchQuery);
    setKeyword(value);
  };

  const onSearch = () => {
    dps.sendClickStream(keyword, EventType.SearchQuery);
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
