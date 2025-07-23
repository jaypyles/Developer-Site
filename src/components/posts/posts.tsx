import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Paper,
} from "@mui/material";
import clsx from "clsx";
import { useState } from "react";
import { CardPost } from "src/components/posts";
import classes from "./posts.module.css";

interface PostDocument {
  image_id: string;
  description: string;
  time_posted: string;
}

interface PostsProps {
  posts: PostDocument[];
}

export const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState({
    image_id: "",
    description: "",
    time_posted: "",
  });

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

  return (
    <div id="post-wrapper">
      {posts && posts.length > 0 ? (
        <div id="posts" className="emboss-no-top !font-prompt">
          <Paper
            id="post-array"
            className="p-2 no-scrollbar"
            sx={{ bgcolor: "#c3c6cb" }}
          >
            <ImageList cols={3} gap={8} className="post-list">
              {posts.map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    src={`/api/post_images/${item.image_id}?w=248&fit=crop&auto=format&dpr=2&compress=true`}
                    alt={item.description}
                    id="post-img"
                    className={clsx(
                      "max-w-[15vw] cursor-pointer transition ease-in-out delay-50 hover:brightness-75 duration-100 emboss",
                      classes.postImg
                    )}
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
