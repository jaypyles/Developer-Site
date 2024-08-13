const domain = process.env.REACT_APP_DOMAIN;
const IMAGE_ENDPOINT = `${domain}/api/images`;

interface Status {
  state: string;
  emoji: {
    id: string;
  };
}

interface DiscordData {
  discord_status: string;
  discord_user: {
    id: string;
    avatar: string;
    username: string;
    display_name: string;
  };
  activities: Status[];
}

export const fetchImage = async (identifier: string) => {
  const url = `${IMAGE_ENDPOINT}/${identifier}`;
  const res = await fetch(url);
  const imageBlob = await res.blob();
  const imageObjectUrl = URL.createObjectURL(imageBlob);
  return imageObjectUrl;
};

export const getPosts = async () => {
  const url = `http://uploader-api:8000/api/posts`;
  const res = await fetch(url);
  const json = res.json();
  return json;
};

export const getDiscordStatus = async (): Promise<DiscordData> => {
  const url = `https://api.lanyard.rest/v1/users/${process.env.NEXT_PUBLIC_DISCORD_USER_ID}`;
  const response = await fetch(url);
  const status: { data: DiscordData } = await response.json();
  return status.data;
};

export const getSpotifyAccessToken = async (): Promise<any> => {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Spotify credentials");
  }

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  const payload = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const headers = {
    Authorization: `Basic ${basicAuth}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: headers,
    body: payload.toString(),
  });

  if (!response.ok) {
    console.error("Couldn't reach spotify to obtain access code.");
    return null;
  }

  const data = await response.json();
  return data;
};

export const getNowPlaying = async () => {
  const accessTokenResponse = await getSpotifyAccessToken();
  if (!accessTokenResponse) {
    return null;
  }

  const accessToken = await accessTokenResponse.access_token;

  const headers = { Authorization: `Bearer ${accessToken}` };
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: headers,
    }
  );

  if (!response.ok || response.status === 204) {
    return null;
  }

  const spotifyResponse = await response.json();

  return {
    songName: spotifyResponse.item.name,
    songURL: spotifyResponse.item.external_urls.spotify,
    albumName: spotifyResponse.item.album.name,
    artistName: spotifyResponse.item.artists[0].name,
    albumCover: spotifyResponse.item.album.images[0].url,
  };
};
