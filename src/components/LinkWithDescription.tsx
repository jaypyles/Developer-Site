import React from "react";

type LinkWithDescriptionProps = {
  link: string;
  small_description: string;
};

const LinkWithDescription: React.FC<LinkWithDescriptionProps> = ({
  link,
  small_description,
}) => {
  return (
    <div className="flex flex-col bg-imageAccent mb-[1em] emboss">
      <a href={link} className="link text-[75%] !ml-[0.5em]">
        {link}
      </a>
      <p className="description text-[60%] ml-[0.5em] mb-[0.5em]">
        {small_description}
      </p>
    </div>
  );
};

export default LinkWithDescription;
