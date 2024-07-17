import {
  Paper,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Modal,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { getPosts } from "../lib/UtilFunctions";
import CardPost from "./CardPost";
import Constants from "src/constants";

interface PostsProps {
  setImagesLoaded: (arg0: boolean) => void;
  imagesLoaded: boolean;
}

type Post = {
  image_id: string;
  description: string;
  time_posted: string;
};

const Posts: React.FC<PostsProps> = ({
  setImagesLoaded,
  imagesLoaded = false,
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState({
    image_id: "",
    description: "",
    time_posted: "",
  });

  const [loadedCount, setLoadedCount] = useState<number>(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#c3c6cb",
    boxShadow: 24,
    p: 4,
  };

  const handleImageLoaded = useCallback(() => {
    setLoadedCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    if (loadedCount === posts.length && posts.length > 0) {
      setImagesLoaded(true);
    }
  }, [loadedCount]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts["posts"]);
    };

    fetchPosts();
  }, []);

  return (
    <div id="post-wrapper">
      {posts && posts.length > 0 ? (
        <div
          id="posts"
          className={`emboss !font-prompt ${!imagesLoaded ? "hidden" : ""}`}
        >
          <Paper
            id="post-array"
            elevation={0}
            className="p-2 mb-4 no-scrollbar"
            sx={{ bgcolor: "#c3c6cb" }}
          >
            <ImageList cols={3} gap={8}>
              {posts.map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    src={`${Constants.DOMAIN}/api/post_images/${item.image_id}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.description}
                    id="post-img"
                    onLoad={handleImageLoaded}
                    loading="lazy"
                    className="max-w-[15vw] cursor-pointer transition ease-in-out delay-50 hover:scale-105 duration-100"
                    onClick={() => {
                      setPhoto(item);
                      handleOpen();
                    }}
                  />
                  <ImageListItemBar
                    className="!text-zinc-700"
                    subtitle={item.time_posted}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Paper>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CardPost
                img={`${Constants.DOMAIN}/api/post_images/${photo.image_id}`}
                description={photo.description}
                date={photo.time_posted}
              />
            </Box>
          </Modal>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Posts;
