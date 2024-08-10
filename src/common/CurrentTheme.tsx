import React from "react";
import Image from "next/image";

const CurrentTheme = () => {
  return (
    <div
      id="current-theme"
      className="absolute top-0 right-0 m-2 p-2 emboss bg-white flex flex-row align-middle space-x-1"
    >
      <p className="text-sm">Current Theme: Windows 98</p>
      <Image
        src="/images/w98computer.gif"
        alt="Windows 98 Computer Gif"
        height={12}
        width={24}
      ></Image>
    </div>
  );
};

export default CurrentTheme;
