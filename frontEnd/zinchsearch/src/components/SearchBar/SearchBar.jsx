// SearchBar.jsx
import React, { useContext, useState } from "react";
import { useEmailContext } from "../../context/EmailContext";
import './SearchBar.css'
function SearchBar() {
  const { emails, searchEmails } = useEmailContext();
  const [query, setQuery] = useState("");
  console.log(query)

  const handleSearch = () => {
    searchEmails(query);
    console.log(emails)
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search emails..."
        className="search-bar"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;




