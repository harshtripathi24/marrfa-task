import React from "react";

const ResultsList = ({ results }) => {
  return (
    <div className="results">
      {results.length > 0 ? (
        results.map((item, index) => (
          <div key={index} className="result-item">
            <h4>{item.title}</h4>

            <p className="date">{item.upload_date}</p>
            <div className="tags">
              {item.tags.map((tag) => {
                return <p className="single-tag">{tag}</p>;
              })}
            </div>
            <p>
              {item.blog} <span className="read-more">...Read More</span>{" "}
            </p>
          </div>
        ))
      ) : (
        <p className="no-results">No results found.</p>
      )}
    </div>
  );
};

export default ResultsList;
