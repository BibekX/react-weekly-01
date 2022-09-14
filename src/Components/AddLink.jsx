import React, { useState } from "react";

export default function AddLink(props) {
  const [link, setLink] = useState({
    title: "",
    url: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLink((prevValue) => ({ ...prevValue, [name]: value }));
    console.log(link);
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
      <input type="text" name="url" placeholder="url" onChange={handleChange} />
      <button onClick={() => props.newLink(link)}>Add Link</button>
    </div>
  );
}
