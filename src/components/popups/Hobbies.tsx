import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

const Hobbies = () => {
  return (
    <div id="popup-hobbies" className="flex flex-row justify-start">
      <div>
        <ul className="list">
          <div className="flex flex-row align-middle space-x-1">
            <Image
              alt="gaming"
              src="/images/8bcontroller.png"
              width={24}
              height={20}
              layout="fixed"
            />
            <li>
              <Typography variant="body1">Video Games</Typography>
            </li>
          </div>
          <div className="flex flex-row align-middle space-x-1">
            <Image
              alt="vr"
              src="/images/8bvr.png"
              width={24}
              height={20}
              layout="fixed"
            />
            <Typography variant="body1">VR (new to this)</Typography>
          </div>
          <div className="flex flex-row align-middle space-x-1">
            <Image
              alt="anime"
              src="/images/8bguts.png"
              width={24}
              height={20}
              layout="fixed"
            />
            <Typography variant="body1">Anime/Manga</Typography>
          </div>
          <div className="flex flex-row align-middle space-x-1">
            <Image
              alt="tech"
              src="/images/8btech.png"
              width={24}
              height={20}
              layout="fixed"
            />
            <Typography variant="body1">Tech (Homelab/Self-Hosting)</Typography>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Hobbies;
