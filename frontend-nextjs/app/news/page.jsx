import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NewsCardsList from "@/components/NewsCardList";

import Image from "next/image";
import newsHero from "../../public/images/energi-bersih.webp";

import { FaSearch } from "react-icons/fa";

export const metadata = {
  title: "News",
};

const page = () => {
  return (
    <MainLayout>
      <section className="text-white relative" id="section-1">
        <Image
          src={newsHero}
          alt="about"
          className="h-420px w-full object-cover"
        />
        <div
          className="absolute text-center w-full h-full flex flex-col md:flex-row justify-end md:justify-start md:items-center p-6 md:p-16"
          id="textOverlay"
        >
          <h2 className="font-bold text-4xl py-1 md:text-5xl">News</h2>
        </div>
      </section>
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
              />
            </div>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">new</span>
              <button className="btn join-item text-xl bg-black text-white">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="section-3" className="bg-white">
        <div className="grid p-6 gap-5 md:max-w-screen-lg">
          <NewsCardsList />
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
