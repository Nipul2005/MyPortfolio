import React from "react";

function SocialIcons({ link, icons, linkType }) {
  return (
    <a href={`${linkType ? linkType + link : link}`}>
      <i
        className={`${icons} text-black sm:w-15 sm:h-15 w-10 h-10 sm:text-4xl text-2xl rounded-full flex justify-center items-center bg-white`}
      ></i>
    </a>
  );
}

export default SocialIcons;
