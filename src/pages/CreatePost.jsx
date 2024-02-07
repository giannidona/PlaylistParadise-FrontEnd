import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");

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
    <div className="w-4/5 mx-auto">
      <form className="text-center my-10" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="link"
            value={link}
            name="playlistLink"
            id="playlistLink"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div>
          <button className="text-white font-bold text-xl" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
