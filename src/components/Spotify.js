import { textDecoration } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import spotify from "../images/spotify.png";

const Spotify = () => {
  const [spotifyData, setSpotifyData] = useState([]);
  const [isListening, setListening] = useState(false);
  const [albumCover, setAlbumCover] = useState(spotify);
  const domain = process.env.REACT_APP_DOMAIN;
  const url = `${domain}/api/spotify/now-playing`;

  const fetchSpotify = async () => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setSpotifyData(JSON.parse(data));
      } else {
        console.error("Failed to fetch Spotify data:", res.status);
      }
    } catch (error) {
      console.error("Error fetching Spotify data:", error);
    }
  };

  const fetchAlbumCover = async () => {
    try {
      const albumLink = spotifyData.albumCover;
      if (albumLink) {
        const res = await fetch(albumLink);
        if (res.ok) {
          const albumBlob = await res.blob();
          const albumObjectUrl = URL.createObjectURL(albumBlob);
          setAlbumCover(albumObjectUrl);
          setListening(true);
        } else {
          console.error("Failed to fetch album cover:", res.status);
        }
      } else {
        console.error("Album link not found in spotifyData");
      }
    } catch (error) {
      console.error("Error fetching album cover:", error);
    }
  };

  useEffect(() => {
    fetchSpotify();
    const spotifyInterval = setInterval(fetchSpotify, 60000);
    return () => clearInterval(spotifyInterval);
  }, []);

  useEffect(() => {
    if (spotifyData) {
      fetchAlbumCover();
      const albumInterval = setInterval(fetchAlbumCover, 60000);
      return () => clearInterval(albumInterval);
    }
  }, [spotifyData]);

  return (
    <div className="spotify-container">
      {!isListening ? (
        <>
          <div className="listening">
            <div className="text">
              <p>Now Listening To On Spotify:</p>
            </div>
          </div>
          <div className="spotify">
            <div className="image">
              <img src={spotify} alt="Album cover" />
            </div>
            <div className="text">
              <p className="name">Not Listening</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="listening">
            <p>Now Listening To On Spotify:</p>
          </div>
          <div className="spotify">
            <div className="image">
              <img src={spotifyData.albumCover} alt="Album cover" />
            </div>
            <div className="text">
              <a
                style={{ textDecoration: "none" }}
                href={spotifyData.songURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="name songName">{spotifyData.songName}</p>
              </a>
              <p className="artist">{spotifyData.artistName}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Spotify;
