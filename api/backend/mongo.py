# STL
import os
from typing import Any, TypedDict  # type: ignore [reportAny]
from datetime import datetime

# PDM
from bson import ObjectId
from gridfs import GridFS
from fastapi import Response, APIRouter
from pymongo import MongoClient

mongo_router = APIRouter()


class PostDocument(TypedDict):
    image_id: str
    description: str
    time_posted: str


class FoundDocument(TypedDict):
    dateUploaded: datetime


def format_date_with_suffix(date: datetime) -> str:
    day = date.day
    if 4 <= day <= 20 or 24 <= day <= 30:
        suffix = "th"
    else:
        suffix = ["st", "nd", "rd"][day % 10 - 1]

    return date.strftime(f"%B {day}{suffix}, %Y")


@mongo_router.get(path="/api/post_images/{image_id}")
async def get_image(image_id: str) -> Response:
    client: MongoClient[dict[str, Any]] = MongoClient(
        f"mongodb://{os.getenv('MONGO_USERNAME')}:{os.getenv('MONGO_PASSWORD')}@uploader-mongo:27017/"
    )
    db = client["posts"]
    fs = GridFS(database=db)
    grid_out = fs.get(file_id=ObjectId(oid=image_id))

    return Response(content=grid_out.read(), media_type="image/jpeg")


@mongo_router.get(path="/api/posts")
async def get_posts():
    client: MongoClient[dict[str, Any]] = MongoClient(
        f"mongodb://{os.getenv('MONGO_USERNAME')}:{os.getenv('MONGO_PASSWORD')}@uploader-mongo:27017/"
    )

    db = client["posts"]
    posts = db["posts"]

    documents: list[PostDocument] = list()

    for document in posts.find().limit(25):
        image_id: ObjectId = document["image_id"]
        doc: FoundDocument = {"dateUploaded": document["dateUploaded"]}

        image_document: PostDocument = {
            "image_id": str(image_id),
            "description": document["description"],
            "time_posted": format_date_with_suffix(doc["dateUploaded"]),
        }

        documents.append(image_document)

    return {"posts": documents}
