import {
  Paper,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Modal,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPosts } from "../lib/UtilFunctions";
import CardPost from "./CardPost";

const Posts = () => {
  const domain = process.env.REACT_APP_DOMAIN;
  const [posts, setPosts] = useState<any[]>([]);
  const [open, setOpen] = React.useState(false);
  const [photo, setPhoto] = React.useState({
    image_id: "",
    description: "",
    time_posted: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: " #121212",
    boxShadow: 24,
    p: 4,
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts["posts"]);
    };

    fetchPosts();
  }, []);

  return (
    <>
      {posts && posts.length > 0 ? (
        <div>
          <Paper
            elevation={3}
            className="p-2 mb-4 no-scrollbar"
            sx={{ bgcolor: "rgba(0,0,0,0.5)" }}
          >
            <ImageList variant="masonry" cols={3} gap={8}>
              {posts.map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    src={`${domain}/api/post_images/${item.image_id}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.description}
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
                img={`${domain}/api/post_images/${photo.image_id}`}
                description={photo.description}
                date={photo.time_posted}
              />
            </Box>
          </Modal>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Posts;
