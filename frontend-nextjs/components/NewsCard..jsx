import React from "react";

const NewsCard = ({ urlImages, urlNews, title, description, publishedAt }) => {
  const date = new Date(publishedAt);
  const formatedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear()} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  return (
    <div className="grid md:grid-cols-2 md:p-6 items-center">
      <img
        src={urlImages}
        alt="news"
        className="w-full rounded-lg"
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="flex flex-col p-4 gap-4">
        <p>{formatedDate}</p>
        <div className="px-2">
          <a className="font-bold text-lg" href={urlNews}>
            {title}
          </a>
        </div>
        <div className="flex md:flex-col gap-1 px-2">{description}</div>
      </div>
    </div>
  );
};

export default NewsCard;
