import React from "react";
// import Image from "next/image";

const Card = ({ urlImages, urlNews, title }) => {
  return (
    <div>
      <img src={urlImages} alt="news" className="object-cover" style={{width: "100%", height: "270px"}} />
      <div className="py-2 flex flex-col">
        <span className="font-semibold text-gray-500">NEWS</span>
        <a href={urlNews} className="py-2">
          {title}
        </a>
      </div>
    </div>
  );
};

export default Card;
