import React, { useState, useEffect } from "react";
import spotify from "../images/spotify.png";

interface SpotifyData {
  albumCover: string;
  songURL: string;
  songName: string;
  artistName: string;
}

interface SpotifyProps {
  loadedState: {
    loaded?: boolean;
    setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const Spotify: React.FC<SpotifyProps> = ({ loadedState }) => {
  const [spotifyData, setSpotifyData] = useState<SpotifyData | null>(null);
  const [spotifyAlbumLoaded, setSpotifyAlbumLoaded] = useState<boolean | null>(
    null,
  );

  const { setLoaded } = loadedState;

  const domain = process.env.REACT_APP_DOMAIN;
  const url = `${domain}/api/spotify/now-playing`;

  const fetchSpotify = async () => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setSpotifyData(data);
      } else {
        console.error("Failed to fetch Spotify data:", res.status);
      }
    } catch (error) {
      console.error("Error fetching Spotify data:", error);
    }
  };

  const fetchAlbumCover = async () => {
    try {
      if (spotifyData) {
        const albumLink = spotifyData.albumCover;

        if (albumLink) {
          const res = await fetch(albumLink);
          if (res.ok) {
            setLoaded(true);
            setSpotifyAlbumLoaded(true);
          } else {
            console.error("Failed to fetch album cover:", res.status);
          }
        } else {
          console.error("Album link not found in spotifyData");
        }
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
    if (!spotifyData) {
      setLoaded(true);
      return;
    }

    fetchAlbumCover();
    const albumInterval = setInterval(fetchAlbumCover, 60000);
    return () => clearInterval(albumInterval);
  }, [spotifyData]);

  return (
    <div className="spotify-container">
      {!spotifyAlbumLoaded ? (
        <>
          <div className="spotify mr-4">
            <div className="image">
              <img src={spotify} alt="Album cover" />
            </div>
            <div className="text">
              <p className="name !mr-4">Not Listening</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="spotify">
            <div className="image">
              <img
                src={spotifyData?.albumCover}
                alt="Album cover"
                className="emboss"
              />
            </div>
            <div className="text">
              <a
                style={{ textDecoration: "none" }}
                href={spotifyData?.songURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="name songName">{spotifyData?.songName}</p>
              </a>
              <p className="artist">{spotifyData?.artistName}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Spotify;
