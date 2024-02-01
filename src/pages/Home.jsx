import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/");
        console.log("Data from server:", response.data);
        setPlaylistData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {playlistData.map((item, index) => (
          <li key={index}>
            {" "}
            <a href={item.playlistLink}>PLAYLIST</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
