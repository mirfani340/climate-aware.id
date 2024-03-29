import React from "react";
import Card from "./Card";

const CardsList = ({ newsArr }) => {
  return (
    <>
      {newsArr.map((news, idx) => {
        return (
          <Card
            key={idx}
            urlImages={news.image_url}
            urlNews={news.url}
            title={news.title}
          />
        );
      })}
    </>
  );
};

export default CardsList;
