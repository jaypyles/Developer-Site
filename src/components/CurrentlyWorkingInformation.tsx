import React from "react";

interface ImageData {
  image: string;
  title: string;
  description: string;
}

interface CurrentlyWorkingInformationProps {
  imageData: ImageData;
}

const CurrentlyWorkingInformation = ({
  imageData,
}: CurrentlyWorkingInformationProps) => {
  return (
    <div className="workblock flex flex-row mr-[0.5em] p-1 bg-[#c0c0c0] emboss">
      <img
        className="image w-[4em] h-[4em] mr-[0.5em]"
        src={`/images/${imageData.image}`}
        alt={imageData.title}
      />
      <div className="content mt-[0.25]">
        <p className="title text-[75%] mb-0">{imageData.title}</p>
        <p className="description text-[65%] mb-0 text-gray-800">
          {imageData.description}
        </p>
      </div>
    </div>
  );
};

export default CurrentlyWorkingInformation;
