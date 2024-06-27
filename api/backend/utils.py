# STL
import os
import base64
import logging
from typing import TypedDict

# PDM
import requests

client_id = os.getenv("SPOTIFY_CLIENT_ID")
client_secret = os.getenv("SPOTIFY_CLIENT_SECRET")
refresh_token = os.getenv("SPOTIFY_REFRESH_TOKEN")

TOKEN_URL = "https://accounts.spotify.com/api/token"
NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing"
basic_auth = base64.b64encode(f"{client_id}:{client_secret}".encode()).decode()

LOG = logging.getLogger(__name__)


class AccessTokenResponse(TypedDict):
    access_token: str
    token_type: str
    expires_in: int
    scope: str


class ExternalUrls(TypedDict):
    spotify: str


class Artist(TypedDict):
    external_urls: ExternalUrls
    href: str
    id: str
    name: str
    type: str
    uri: str


class Album(TypedDict):
    album_type: str
    artists: list[Artist]
    available_markets: list[str]
    external_urls: ExternalUrls
    href: str
    id: str
    images: list[dict[str, int | str]]
    name: str
    release_date: str
    release_date_precision: str
    total_tracks: int
    type: str
    uri: str


class Item(TypedDict):
    album: Album
    artists: list[Artist]
    available_markets: list[str]
    disc_number: int
    duration_ms: int
    explicit: bool
    external_ids: dict[str, str]
    external_urls: ExternalUrls
    href: str
    id: str
    is_local: bool
    name: str
    popularity: int
    preview_url: str
    track_number: int
    type: str
    uri: str


class Context(TypedDict):
    external_urls: ExternalUrls
    href: str
    type: str
    uri: str


class Actions(TypedDict):
    disallows: dict[str, bool]


class SpotifyResponse(TypedDict):
    timestamp: int
    context: Context
    progress_ms: int
    item: Item
    currently_playing_type: str
    actions: Actions
    is_playing: bool


class SpotifyNowPlaying(TypedDict):
    songName: str
    songURL: str
    albumName: str
    artistName: str
    albumCover: str


def get_access_token() -> AccessTokenResponse | None:
    payload = {"grant_type": "refresh_token", "refresh_token": refresh_token}

    headers = {
        "Authorization": f"Basic {basic_auth}",
        "Content-Type": "application/x-www-form-urlencoded",
    }

    response = requests.post(TOKEN_URL, data=payload, headers=headers)

    if response.status_code != 200:
        return

    res: AccessTokenResponse = response.json()
    return res


def get_now_playing() -> SpotifyResponse | None:
    if not (access_token_res := get_access_token()):
        return

    if not (access_token := access_token_res.get("access_token")):
        return

    headers = {"Authorization": f"Bearer {access_token}"}
    response = requests.get(NOW_PLAYING_URL, headers=headers)

    if response.status_code != 200:
        return

    res: SpotifyResponse = response.json()
    return res


def now_playing() -> SpotifyNowPlaying | None:
    """Get and format Spotify now playing."""
    if not (now_playing := get_now_playing()):
        return

    spotify_now_playing: SpotifyNowPlaying = {
        "songName": now_playing["item"]["name"],
        "songURL": now_playing["item"]["external_urls"]["spotify"],
        "albumName": now_playing["item"]["album"]["name"],
        "artistName": now_playing["item"]["artists"][0]["name"],
        "albumCover": now_playing["item"]["album"]["images"][0]["url"],  # type: ignore[reportAssignmentType]
    }

    return spotify_now_playing
