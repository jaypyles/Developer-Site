import React from "react";

interface Data {
  image: string;
  title: string;
  description: string;
}

interface CurrentlyWorkingInformationProps {
  data: Data;
}

const CurrentlyWorkingInformation: React.FC<
  CurrentlyWorkingInformationProps
> = ({ data }) => {
  const imageUrl = `/images/${data.image}`;

  return (
    <div className="workblock flex flex-row mr-[0.5em] p-1 bg-imageAccent emboss">
      {imageUrl && (
        <img
          className="image w-[4em] h-[4em] mr-[0.5em]"
          src={imageUrl}
          alt={data.title}
        />
      )}
      <div className="content mt-[0.25]">
        <p className="title text-[75%] mb-0">{data.title}</p>
        <p className="description text-[65%] mb-0 text-gray-800">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default CurrentlyWorkingInformation;
