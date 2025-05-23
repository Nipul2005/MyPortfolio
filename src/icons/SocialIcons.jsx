import React from "react";

function SocialIcons({ link, icons, linkType }) {
  return (
    <a
      href={`${linkType ? linkType + link : link}`}
      aria-label="social-link"
    >
      <i
        className={`${icons} text-white sm:text-4xl text-lg rounded-full flex justify-center items-center bg-transparent hover:scale-75 transition-all ease-in duration-300`}
      ></i>
    </a>
  );
}

export default SocialIcons;
