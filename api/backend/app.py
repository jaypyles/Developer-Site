# STL
import os
from typing import Any  # type: ignore[reportAny]

# PDM
import requests
from fastapi import FastAPI
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

# LOCAL
from api.backend.utils import now_playing
from api.backend.github import get_most_recent_public_project
from api.backend.mongo import mongo_router

DISCORD_USER_ID: str = os.environ["DISCORD_USER_ID"]

app: FastAPI = FastAPI()
app.include_router(router=mongo_router)

origins: list[str] = ["jaydepyles.dev", "10.0.0.6", "localhost"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/_next/static", StaticFiles(directory="dist/_next/static"), name="static")
app.mount("/images", StaticFiles(directory="dist/images"), name="images")


@app.get("/favicon.png")
def read_favicon():
    return FileResponse("dist/favicon.png")


@app.get("/")
def read_root():
    return FileResponse("dist/index.html")


@app.get("/{page_name}")
def get_page(page_name: str):
    file_path = f"dist/{page_name}.html"

    if not os.path.exists(file_path):
        return FileResponse("dist/404.html")

    return FileResponse(file_path)


@app.get(path="/api/spotify/now-playing")
async def get_playing() -> JSONResponse:
    playing = now_playing()

    return JSONResponse(content=playing)


@app.get(path="/api/github/recent")
async def get_recent_repo() -> JSONResponse:
    USERNAME = "jaypyles"
    status: str | None = get_most_recent_public_project(username=USERNAME)

    if not status:
        return JSONResponse(content={"url": ""})

    return JSONResponse(content={"url": status})
