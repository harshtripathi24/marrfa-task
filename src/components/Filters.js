import React from "react";

const availableTags = [
  "all",
  "Trending",
  "News",
  "Popular",
  "Recent",
  "Discount",
];

const Filters = ({ selectedTag, setSelectedTag }) => {
  return (
    <select
      value={selectedTag}
      onChange={(e) => setSelectedTag(e.target.value)}
      className="filter-dropdown"
    >
      {availableTags.map((tag) => (
        <option key={tag} value={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
};

export default Filters;
