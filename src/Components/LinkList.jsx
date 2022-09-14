import React from "react";

export default function LinkList(props) {
  return (
    <div>
      {props.links
        .filter((link) =>
          props.search === ""
            ? link
            : link.title.toLowerCase().includes(props.search.toLowerCase()) &&
              link
        )
        .map((link, index) => (
          <div
            key={index}
            style={{
              margin: "20px auto",
              border: "2px solid black",
              width: "300px",
            }}
          >
            <h1>{link.title}</h1>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.url}
            </a>
          </div>
        ))}
    </div>
  );
}
