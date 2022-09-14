import React, { useState, useEffect } from "react";
import LinkList from "../Components/LinkList";
import Search from "../Components/Search";
import AddLink from "../Components/AddLink";

export default function LinkPage() {
  const [links, setLinks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.getItem("links")
      ? setLinks(JSON.parse(localStorage.getItem("links")))
      : localStorage.setItem("links", JSON.stringify([]));
  }, []);

  return (
    <div>
      <Search searchValue={(data) => setSearch(data)} />
      <LinkList links={links} search={search} />
      <AddLink
        newLink={(link) => {
          const newList = [...links, link];
          setLinks(newList);
          localStorage.setItem("links", JSON.stringify(newList));
        }}
      />
    </div>
  );
}
