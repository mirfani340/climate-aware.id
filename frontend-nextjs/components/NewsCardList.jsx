"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard.";

const NewsCardsList = () => {
  const [news, setNews] = useState([]);
  const dotenv = require("dotenv");
  dotenv.config();
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
  const API_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
  const NEWS_API = `${API_URL}${API_KEY}`;

  const getNews = async () => {
    const response = await axios.get(`${NEWS_API}`);
    const responseJson = await response.data.articles;
    setNews(responseJson);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      {news.map((news, idx) => {
        return (
          <NewsCard
            key={idx}
            urlImages={news.image}
            urlNews={news.url}
            title={news.title}
            description={news.description}
            publishedAt={news.publishedAt}
          />
        );
      })}
    </>
  );
};

export default NewsCardsList;
