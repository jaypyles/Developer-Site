import React from "react";

interface Data {
  image: string;
  title: string;
  description: string;
}

interface WorkBlockProps {
  data: Data;
  onImageLoaded: () => void;
}

const WorkBlock: React.FC<WorkBlockProps> = ({ data, onImageLoaded }) => {
  const imageUrl = require(`../images/${data.image}`);

  return (
    <div className="workblock flex flex-row mr-[0.5em] p-1 rounded bg-testAccent border-1 border-black">
      {imageUrl && (
        <img
          className="image w-[4em] h-[4em] mr-[0.5em]"
          src={imageUrl}
          alt={data.title}
          onLoad={onImageLoaded}
        />
      )}
      <div className="content mt-[0.25]">
        <p className="title text-[75%] mb-[0]">{data.title}</p>
        <p className="description text-[65%] mb-[0] text-stone-300">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default WorkBlock;
