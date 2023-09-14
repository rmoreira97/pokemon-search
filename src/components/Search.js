import React from "react";

function Search({ onChange }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={onChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
