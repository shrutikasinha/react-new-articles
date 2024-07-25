import React from "react";

import "./styles.css";

const Shimmer = () => {
  return (
    <div className="container">
      <div className="grid-container">
        {Array.from({ length: 10 }, (item, i) => i).map((item) => {
          return <div key={item} className="card loading-text" data-testid={'loading'}></div>;
        })}
      </div>
    </div>
  );
};

export default Shimmer;
