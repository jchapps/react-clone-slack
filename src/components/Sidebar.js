import React from "react";

export default function Siderbar() {
  return (
    <div className="organisations-container">
      <div className="organisations-side-bar">
        <h2 className="side-bar-active">ML</h2>
        <h2 className="side-bar-inactive">SL</h2>
        <h2 className="side-bar-inactive">J</h2>
        <h2 className="side-bar-add-org">
          <i className="fa-solid fa-plus"></i>
        </h2>
      </div>
    </div>
  );
}
