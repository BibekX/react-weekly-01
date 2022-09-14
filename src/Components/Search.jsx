import React from "react";

export default function Search(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => props.searchValue(event.target.value)}
      />
    </div>
  );
}
