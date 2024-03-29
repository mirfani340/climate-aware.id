"use client";
import { useEffect, useState } from "react";

import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import CardsList from "@/components/CardsList";
import ReactPaginate from "react-paginate";

import axios from "axios";

import img1 from "../public/images/img1.webp";
import articIce from "../public/images/artic-ice.webp";
import evidence from "../public/images/evidence.webp";
import causes from "../public/images/causes.webp";
import effects from "../public/images/effects.webp";
import solutions from "../public/images/solutions.webp";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [news, setNews] = useState([]);
  const dotenv = require("dotenv");
  dotenv.config();
  const CLIMATE_AWARE_NEWS = process.env.NEXT_PUBLIC_BASE_URL || "";

  // init library AOS
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      duration: 1000,
    });
  }, []);

  const getNews = async () => {
    const response = await axios.get(`${CLIMATE_AWARE_NEWS}`);
    const responseJson = await response.data;
    setNews(responseJson.data);
  };

  useEffect(() => {
    getNews();
  }, []);

  const PaginatedItem = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = news.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(news.length / itemsPerPage);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % news.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-white text-base p-2 md:p-10" data-aos="fade-right">
          <CardsList newsArr={currentItems} />
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="flex flex-wrap gap-2 justify-center text-white max-w-xl"
          pageClassName="flex-1 rounded-md page-number"
          breakClassName="flex-1 rounded-md page-number"
          previousClassName="flex-1 page-number"
          nextClassName="flex-1 page-number"
          activeClassName="border-2 border-white"
        />
      </>
    );
  };

  if (news.length <= 0) {
    return (
      <MainLayout>
        <section
          id="section1"
          className="w-full h-screen flex justify-center items-center"
        >
          <p
            id="quotes"
            className="w-full h-full flex justify-center items-center text-4xl text-white text-center font-semibold px-6"
            data-aos="fade-down"
          >
            {/* TODO: this should be randomized quotes from backend */}
            Climate change is no longer some far-off problem
            <br />
            it is happening here, it is happening now.
          </p>
        </section>
        <section id="section2" className="pt-4">
          <h1
            className="text-white text-center font-semibold text-3xl"
            data-aos="fade-up"
          >
            About Us
          </h1>
          <div className="grid p-6 gap-5 md:grid-cols-2 items-center" data-aos="fade-up">
            <div>
              <div className="flex flex-col justify-center md:p-8 md:pb-0 text-white">
                <p className="text-lg py-3 md:text-2xl font-semibold flex items-center">
                  OUR MISSION
                </p>
                <p className="text-base md:text-lg">
                  Climate change is the greatest threat to humanity, perhaps
                  ever. Global temperatures are rising at an unprecedented rate,
                  causing drought and forest fires and impacting human health.
                </p>
              </div>
              <div className="flex flex-col justify-center md:p-8 md:pt-0 text-white">
                <p className="text-lg py-3 md:text-2xl font-semibold flex items-center">
                  OUR VISION
                </p>
                <p className="text-base md:text-lg">
                  The environment is where we all meet; where we all have a
                  mutual interest it is the one thing all of us share.
                </p>
              </div>
            </div>
            <Image src={articIce} alt="about-us" className="max-h-300px sm:max-h-400px object-cover md:p-4" />
          </div>
        </section>
        <section id="section3" className="p-6">
          <h1 className="text-white font-semibold text-lg md:text-2xl">
            News and Features
          </h1>
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 text-white text-base"
            data-aos="fade-left"
          >
            <div>
              <Image src={img1} alt="about1" className="" />
              <div className="py-2">
                <span className="font-semibold text-gray-500">NEWS</span>
                <p className="py-2">
                  Global Call to Action: Unprecedented Climate Change Challenges
                  Demand Urgent Solutions
                </p>
              </div>
            </div>
            <div>
              <Image src={img1} alt="about1" className="" />
              <div className="py-2">
                <span className="font-semibold text-gray-500">NEWS</span>
                <p className="py-2">
                  Global Call to Action: Unprecedented Climate Change Challenges
                  Demand Urgent Solutions
                </p>
              </div>
            </div>
            <div>
              <Image src={img1} alt="about1" className="" />
              <div className="py-2">
                <span className="font-semibold text-gray-500">NEWS</span>
                <p className="py-2">
                  Global Call to Action: Unprecedented Climate Change Challenges
                  Demand Urgent Solutions
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="section4" className="py-6">
          <h1
            className="text-white text-center font-semibold text-4xl md:text-5xl mb-12"
            data-aos="fade-up"
          >
            Apa itu Climate Change?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 text-xl">
            <div className="text-white relative" data-aos="zoom-in">
              <Image
                src={evidence}
                alt="evidence"
                id="evidence"
                style={{ minHeight: "500px", objectFit: "cover" }}
              />
              <a
                className="absolute text-center w-full h-full flex flex-col justify-center"
                id="textOverlay"
                href="/education/evidence"
              >
                <h2 className="font-bold text-xl py-2">EVIDENCE</h2>
                <p className="font-bold text-3xl">
                  How Do We Know <br /> Climate Change Is Real?
                </p>
              </a>
            </div>
            <div className="text-white relative" data-aos="zoom-in">
              <Image
                src={causes}
                alt="causes"
                id="evidence"
                style={{ minHeight: "500px", objectFit: "cover" }}
              />
              <a
                className="absolute text-center w-full h-full flex flex-col justify-center"
                id="textOverlay"
                href="/education/causes"
              >
                <h2 className="font-bold text-xl py-2">CAUSES</h2>
                <p className="font-bold text-3xl">
                  Why is Climate Change <br /> Happening?
                </p>
              </a>
            </div>
            <div className="text-white relative" data-aos="zoom-in">
              <Image
                src={effects}
                alt="effects"
                id="evidence"
                style={{ minHeight: "500px", objectFit: "cover" }}
              />
              <a
                className="absolute text-center w-full h-full flex flex-col justify-center"
                id="textOverlay"
                href="/education/effects"
              >
                <h2 className="font-bold text-xl py-2">EFFECTS</h2>
                <p className="font-bold text-3xl">
                  What are the effects of <br /> Climate Change?
                </p>
              </a>
            </div>
            <div className="text-white relative" data-aos="zoom-in">
              <Image
                src={solutions}
                alt="solutions"
                id="evidence"
                style={{ minHeight: "500px", objectFit: "cover" }}
              />
              <a
                className="absolute text-center w-full h-full flex flex-col justify-center"
                id="textOverlay"
                href="/education/solutions"
              >
                <h2 className="font-bold text-xl py-2">SOLUTIONS</h2>
                <p className="font-bold text-3xl">
                  What is Being Done to <br /> Solve Climate Change?
                </p>
              </a>
            </div>
          </div>
        </section>
        <section id="section5" className="text-white">
          <div className="grid md:grid-flow-col md:grid-cols-2 justify-center items-center md:h-150px pb-30px bg-black">
            <div className="flex flex-col items-center p-4 md:ps-10">
              <h1 className="text-3xl font-bold">Get in touch with us</h1>
              <p className="text-base">
                Subscribe for more updated informations
              </p>
            </div>
            <div className="join md:px-4 w-40">
              <input
                className="input input-bordered join-item text-black rounded-l-full"
                placeholder="Email"
                type="email"
              />
              <button className="btn join-item rounded-r-full bg-black text-white">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section
        id="section1"
        className="w-full h-screen flex justify-center items-center"
      >
        <p
          id="quotes"
          className="w-full h-full flex justify-center items-center text-4xl text-white text-center font-semibold px-6"
          data-aos="fade-down"
        >
          {/* TODO: this should be randomized quotes from backend */}
          Climate change is no longer some far-off problem
          <br />
          it is happening here, it is happening now.
        </p>
      </section>
      <section id="section2" className="pt-4">
        <h1
          className="text-white text-center font-semibold text-3xl"
          data-aos="fade-up"
        >
          About Us
        </h1>
        <div className="grid p-6 gap-5 md:grid-cols-2 items-center" data-aos="fade-up">
          <div>
            <div className="flex flex-col justify-center md:p-8 md:pb-0 text-white">
              <p className="text-lg py-3 md:text-2xl font-semibold flex items-center">
                OUR VISION
              </p>
              <p className="text-base md:text-lg">
                Become a leading online platform committed to fostering
                awareness, understanding, and action on climate change, striving
                for a sustainable and resilient future for the planet and its
                inhabitants.
              </p>
            </div>
            <div className="flex flex-col justify-center md:p-8 md:pt-0 text-white">
              <p className="text-lg py-3 md:text-2xl font-semibold flex items-center">
                OUR MISSION
              </p>
              <ul className="md:pt-2 px-8 flex flex-col gap-2">
                <li className="list-disc">
                  <p className="text-base md:text-lg">Raise Awareness</p>
                </li>
                <li className="list-disc">
                  <p className="text-base md:text-lg">Inspire Action</p>
                </li>
                <li className="list-disc">
                  <p className="text-base md:text-lg">Promote Innovation</p>
                </li>
                <li className="list-disc">
                  <p className="text-base md:text-lg">
                    Encourage Education and Research
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-base md:text-lg">
                    Measure and Report Impact
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <Image src={articIce} alt="about-us" className="max-h-300px sm:max-h-400px object-cover md:p-4" />
        </div>
      </section>
      <section id="section3" className="p-6">
        <h1 className="text-white font-semibold text-lg md:text-4xl">
          News and Features
        </h1>
        <PaginatedItem itemsPerPage={3} />
      </section>
      <section id="section4" className="py-6">
        <h1
          className="text-white text-center font-semibold text-4xl md:text-5xl mb-12"
          data-aos="fade-up"
        >
          What is Climate Change?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 text-xl">
          <div className="text-white relative" data-aos="zoom-in">
            <Image
              src={evidence}
              alt="evidence"
              id="evidence"
              style={{ minHeight: "500px", objectFit: "cover" }}
            />
            <a
              className="absolute text-center w-full h-full flex flex-col justify-center"
              id="textOverlay"
              href="/education/evidence"
            >
              <h2 className="font-bold text-xl py-2">EVIDENCE</h2>
              <p className="font-bold text-3xl">
                How Do We Know <br /> Climate Change Is Real?
              </p>
            </a>
          </div>
          <div className="text-white relative" data-aos="zoom-in">
            <Image
              src={causes}
              alt="causes"
              id="evidence"
              style={{ minHeight: "500px", objectFit: "cover" }}
            />
            <a
              className="absolute text-center w-full h-full flex flex-col justify-center"
              id="textOverlay"
              href="/education/causes"
            >
              <h2 className="font-bold text-xl py-2">CAUSES</h2>
              <p className="font-bold text-3xl">
                Why is Climate Change <br /> Happening?
              </p>
            </a>
          </div>
          <div className="text-white relative" data-aos="zoom-in">
            <Image
              src={effects}
              alt="effects"
              id="evidence"
              style={{ minHeight: "500px", objectFit: "cover" }}
            />
            <a
              className="absolute text-center w-full h-full flex flex-col justify-center"
              id="textOverlay"
              href="/education/effects"
            >
              <h2 className="font-bold text-xl py-2">EFFECTS</h2>
              <p className="font-bold text-3xl">
                What are the effects of <br /> Climate Change?
              </p>
            </a>
          </div>
          <div className="text-white relative" data-aos="zoom-in">
            <Image
              src={solutions}
              alt="solutions"
              id="evidence"
              style={{ minHeight: "500px", objectFit: "cover" }}
            />
            <a
              className="absolute text-center w-full h-full flex flex-col justify-center"
              id="textOverlay"
              href="/education/solutions"
            >
              <h2 className="font-bold text-xl py-2">SOLUTIONS</h2>
              <p className="font-bold text-3xl">
                What is Being Done to <br /> Solve Climate Change?
              </p>
            </a>
          </div>
        </div>
      </section>
      <section id="section5" className="text-white">
        <div className="grid md:grid-flow-col md:grid-cols-2 justify-center items-center md:h-150px pb-30px bg-black">
          <div className="flex flex-col items-center p-4 md:ps-10">
            <h1 className="text-3xl font-bold">Get in touch with us</h1>
            <p className="text-base">Subscribe for more updated informations</p>
          </div>
          <div className="join md:px-4 w-40">
            <input
              className="input input-bordered join-item text-black rounded-l-full"
              placeholder="Email"
              type="email"
            />
            <button className="btn join-item rounded-r-full bg-black text-white">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
