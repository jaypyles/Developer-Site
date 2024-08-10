import {
  Paper,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Modal,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import CardPost from "./CardPost";
import { PostDocument } from "src/lib/mongo";

interface PostsProps {
  posts: PostDocument[];
  setImagesLoaded: (arg0: boolean) => void;
  imagesLoaded: boolean;
}

const Posts: React.FC<PostsProps> = ({
  posts,
  setImagesLoaded,
  imagesLoaded = false,
}) => {
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
    width: 500,
    bgcolor: "#c3c6cb",
    boxShadow: 24,
    p: 4,
  };

  const handleImageLoaded = useCallback(() => {
    setLoadedCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    // if (loadedCount === posts.length && posts.length > 0) {
    setImagesLoaded(true);
    // }
  }, [loadedCount]);

  return (
    <div id="post-wrapper">
      {posts && posts.length > 0 ? (
        <div
          id="posts"
          className={`emboss-no-top !font-prompt ${
            !imagesLoaded ? "hidden" : ""
          }`}
        >
          <Paper
            id="post-array"
            elevation={0}
            className="p-2 no-scrollbar"
            sx={{ bgcolor: "#c3c6cb" }}
          >
            <ImageList cols={3} gap={8}>
              {posts.map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    src={`/api/post_images/${item.image_id}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.description}
                    id="post-img"
                    onLoad={handleImageLoaded}
                    loading="lazy"
                    className="max-w-[15vw] cursor-pointer transition ease-in-out delay-50 hover:brightness-95 duration-100 emboss"
                    onClick={() => {
                      setPhoto(item);
                      handleOpen();
                    }}
                  />
                  <ImageListItemBar
                    className="!text-zinc-700"
                    subtitle={item.time_posted}
                  />
                  {/* Prefetch image for load times */}
                  <img
                    src={`/api/post_images/${item.image_id}`}
                    alt={item.description}
                    style={{ display: "none" }}
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
            <Box sx={style} id="modal-box">
              <CardPost
                img={`/api/post_images/${photo.image_id}`}
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
