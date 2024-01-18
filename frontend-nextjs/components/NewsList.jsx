"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard.";
import ReactPaginate from "react-paginate";

import { FaSearch } from "react-icons/fa";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const titleQuery = query.toLowerCase();
  const dotenv = require("dotenv");
  dotenv.config();
  const CLIMATE_AWARE_NEWS = process.env.NEXT_PUBLIC_BASE_URL || "";

  const getNews = async () => {
    const response = await axios.get(`${CLIMATE_AWARE_NEWS}`);
    const responseJson = await response.data;
    setNews(responseJson.data);
  };

  useEffect(() => {
    getNews();
  }, []);

  const getFilteredNews = (query, items) => {
    if (!query) {
      return items;
    }
    return items.filter((news) => news.title.toLowerCase().includes(query));
  };

  const filteredNews = getFilteredNews(titleQuery, news);

  const PaginatedItem = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = filteredNews.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredNews.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filteredNews.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        {currentItems.map((news, idx) => {
          return (
            <NewsCard
              key={idx}
              urlImages={news.image_url}
              urlNews={news.url}
              title={news.title}
              description={news.description}
              publishedAt={news.published_at}
            />
          );
        })}
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="flex flex-wrap gap-2 justify-center font-bold md:max-w-screen-md m-auto"
          pageClassName="flex-1 rounded-md page-number"
          breakClassName="flex-1 rounded-md page-number"
          previousClassName="flex-1 page-number"
          nextClassName="flex-1 page-number"
          activeClassName="text-black border-2 border-black"
        />
      </>
    );
  };

  return (
    <>
      <section
        id="section-2"
        className="bg-white flex items-center justify-center h-300px"
      >
        <div className="grid">
          <div className="join">
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="indicator">
              {/* <span className="indicator-item badge badge-secondary">new</span> */}
              <button className="btn join-item text-xl bg-black text-white">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="section-3" className="bg-white">
        <div className="grid p-6 gap-5 md:max-w-screen-lg m-auto">
          <PaginatedItem itemsPerPage={5} />
        </div>
      </section>
    </>
  );
};

export default NewsList;
