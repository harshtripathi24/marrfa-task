import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import ResultsList from "./components/ResultsList";
import Filters from "./components/Filters";
import { data } from "./data";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredResults = data.filter((item) => {
    const matchesQuery = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesTag = selectedTag === "all" || item.tags.includes(selectedTag);

    return matchesQuery && matchesTag;
  });

  return (
    <>
      <div className="container">
        <h1>Marrfa Search</h1>
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filters selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      </div>
      <div>
        <ResultsList results={filteredResults} />
      </div>
      <div className="foot"></div>
    </>
  );
};

export default App;
