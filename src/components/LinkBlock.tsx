import React from "react";
import { useState, useEffect } from "react";

interface Data {
  image: string;
  link: string;
  description: string;
}

interface LinkBlockProps {
  data: Data;
}

const LinkBlock: React.FC<LinkBlockProps> = ({ data }) => {
  const [image, setImage] = useState("");
  const filename = data.image;
  const domain = process.env.REACT_APP_DOMAIN;
  const url = `${domain}/api/images/${filename}`;

  const fetchImage = async () => {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);

    setImage(imageObjectUrl);
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <div className="linkblock">
      <div className="image">
        <img src={image} />
      </div>
      <div className="text">
        <div className="description">
          <a href={data.link}>{data.description}</a>
        </div>
      </div>
    </div>
  );
};

export default LinkBlock;
