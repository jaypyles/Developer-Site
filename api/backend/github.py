# STL
from typing import TypedDict
from datetime import datetime

# PDM
import requests


class GithubResponse(TypedDict):
    pushed_at: datetime
    html_url: str


def get_most_recent_public_project(username: str) -> str | None:
    url = f"https://api.github.com/users/{username}/repos?sort=updated"
    response = requests.get(url)

    if not response.status_code != 200:
        return

    repos: list[GithubResponse] = response.json()

    if not repos:
        return

    sorted_repos: list[GithubResponse] = sorted(repos, key=lambda d: d["pushed_at"])
    return sorted_repos[-1]["html_url"]
