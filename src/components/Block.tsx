import React from "react";

type BlockProps = {
  link: string;
  small_description: string;
};

const Block: React.FC<BlockProps> = ({ link, small_description }) => {
  return (
    <div className="block flex flex-col bg-testAccent rounded mb-[1em]">
      <a href={link} className="link text-[75%] !ml-[0.5em]">
        {link}
      </a>
      <p className="description text-[60%] ml-[0.5em] mb-[0.5em]">
        {small_description}
      </p>
    </div>
  );
};

export default Block;
