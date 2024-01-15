import React from "react";
import MainLayout from "@/layouts/MainLayout";
import NewsList from "@/components/NewsList";

import Image from "next/image";
import newsHero from "../../public/images/energi-bersih.webp";


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
      <NewsList />
    </MainLayout>
  );
};

export default page;
