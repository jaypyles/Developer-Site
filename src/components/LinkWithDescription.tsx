import React from "react";
import Image from "next/image";

type LinkWithDescriptionProps = {
  link: string;
  small_description: string;
  github?: string;
};

const LinkWithDescription: React.FC<LinkWithDescriptionProps> = ({
  link,
  small_description,
  github = "",
}) => {
  return (
    <div className="flex flex-col text-base bg-[#c0c0c0] mb-[1em] emboss">
      <div className="flex flex-row justify-between align-middle max-h-[1.5em]">
        <a href={link} className="link text-[0.9rem] !ml-[0.5em] mt-[0.25em]">
          {link}
        </a>
        {github && (
          <a
            href={github}
            className="flex items-center !h-[1rem] mt-[0.5em] !mr-[0.25em] no-arrow"
          >
            <Image
              className="h-full"
              src="/images/github.png"
              alt="Github Link"
              layout="intrinsic"
              height={24}
              width={24}
            />
          </a>
        )}
      </div>
      <p className="description text-[80%] ml-[0.5em] mb-[0.5em] w-3/4">
        {small_description}
      </p>
    </div>
  );
};

export default LinkWithDescription;
