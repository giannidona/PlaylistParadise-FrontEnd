import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/");

        const playlistLinks = Object.values(response.data).map((playlist) => {
          const regexPattern = /https:\/\/open\.spotify\.com\/[a-zA-Z0-9/?_-]+/;
          const match = playlist.playlistLink.match(regexPattern);

          if (match) {
            return {
              link: match[0],
              id: playlist._id,
            };
          } else {
            console.log(
              "No se encontró ninguna URL de Spotify en el código para la playlist:",
              playlist
            );
            return null;
          }
        });

        console.log(playlistLinks);
        setPlaylistData(playlistLinks.filter(Boolean));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.post(`http://localhost:8080/delete/${id}`);

      setPlaylistData((prevPlaylistData) =>
        prevPlaylistData.filter((playlist) => playlist.id !== id)
      );
    } catch (error) {
      console.error("Error al eliminar el post:", error);
    }
  };

  return (
    <>
      <section className="grid grid-cols-3 w-11/12 mx-auto">
        {playlistData.map((playlist, index) => (
          <div className="mx-auto" key={index}>
            <iframe
              id={playlist.id}
              className="my-2"
              src={playlist.link}
              width="auto"
              height="400"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="playlist"
              loading="lazy"
            ></iframe>
            <div className="flex justify-center text-white">
              <button
                className="uppercase bg-black px-3 py-2 rounded font-semibold"
                onClick={() => handleDelete(playlist.id)}
              >
                Eliminar Playlist
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
