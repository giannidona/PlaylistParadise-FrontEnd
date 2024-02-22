import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();

  const genres = ["melodic techno", "progressive house", "techno", "edm"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");

    try {
      const res = await axios.post("http://localhost:8080/create", {
        playlistLink: link,
        playlistName: name,
        genre: genre,
      });
      const { data } = res;
      console.log("Response data:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-4/5 mx-auto">
      <h1 className="text-3xl text-white text-center font-semibold mt-10 mb-8">
        UPLOAD PLAYLIST
      </h1>
      <form className="text-center" onSubmit={handleSubmit}>
        <div>
          <div className="pb-2 flex justify-center">
            <label className="text-white mr-5" htmlFor="">
              PLAYLIST EMBED LINK
            </label>
          </div>
          <input
            className="mb-5 px-5 py-2 rounded-lg"
            type="text"
            placeholder="Embed Link"
            value={link}
            name="playlistLink"
            id="playlistLink"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div>
          <div className="pb-2 flex justify-center">
            <label className="text-white mr-5" htmlFor="">
              PLAYLIST NAME
            </label>
            <p className="text-zinc-500">?</p>
          </div>
          <input
            className="mb-5 px-5 py-2 rounded-lg"
            type="text"
            placeholder="Playlist Name"
            value={name}
            name="playlistName"
            id="playlistName"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div className="pb-2">
            <label className="text-white mr-5" htmlFor="">
              PLAYLIST GENRE
            </label>
          </div>
          <select
            className="block py-2 px-0 mx-auto mb-5 text-sm bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-gray-200 peer text-white"
            id="genre"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option disabled value="">
              Select a genre
            </option>
            {genres.map((genreOption) => (
              <option
                className="text-black"
                key={genreOption}
                value={genreOption}
              >
                {genreOption}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            className="text-white bg-black px-4 py-2 rounded-lg font-bold text-xl"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
