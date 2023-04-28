import { useState } from "react";
import styles from "./search.module.css";

import SearchIcon from "@mui/icons-material/Search";
// import { dataHubService, EventType } from "tnet-clickstream-connector";
import { dataHubService, EventType } from "tnet-clickstream-connector-local";

function SearchBar() {
  const [keyword, setKeyword] = useState("");

  const onChange = (value: string) => {
    dataHubService.sendClickStream(value, EventType.SearchQuery);
    setKeyword(value);
  };

  const onSearch = () => {
    dataHubService.sendClickStream(keyword, EventType.SearchQuery);
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
