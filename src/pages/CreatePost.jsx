import React, { useState } from "react";
import axios from "axios";

export default function CreatePost() {
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/create", {
        playlistLink: link,
      });
      const { data } = res;
      console.log("Response data:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="link"
          value={link}
          name="playlistLink"
          id="playlistLink"
          onChange={(e) => setLink(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
