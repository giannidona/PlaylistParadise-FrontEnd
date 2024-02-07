import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/");
        console.log(response.data);

        const playlistLinks = Object.values(response.data).map((playlist) => {
          const regexPattern = /https:\/\/open\.spotify\.com\/[a-zA-Z0-9/?_-]+/;
          const match = playlist.playlistLink.match(regexPattern);

          if (match) {
            return match[0];
          } else {
            console.log(
              "No se encontró ninguna URL de Spotify en el código para la playlist:",
              playlist
            );
            return null;
          }
        });

        setPlaylistData(playlistLinks.filter(Boolean));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="grid grid-cols-3 w-11/12 mx-auto">
        {playlistData.map((link, index) => (
          <div className="mx-auto" key={index}>
            <iframe
              className="my-2"
              src={link}
              width="auto"
              height="400"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="playlist"
            ></iframe>
          </div>
        ))}
      </section>
    </>
  );
}
