import React from "react";
import MainLayout from "@/layouts/MainLayout";

import Image from "next/image";
import solutions from "../../public/images/solutions.jpg";
import climateChange from "../../public/images/climate-change.png";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <MainLayout>
      <section className="text-white relative" id="section-1">
        <Image
          src={solutions}
          alt="about"
          className="h-420px w-full object-cover"
        />
        <div
          className="absolute text-center w-full h-full flex flex-col justify-end p-5"
          id="textOverlay"
        >
          <h2 className="font-bold text-4xl py-1">About Us</h2>
        </div>
      </section>
      <section id="section-2">
        <div className="grid p-6 gap-5 md:grid-cols-2">
          <div>
            <div className="flex flex-col justify-center md:p-8 md:pb-0">
              <p className="text-lg py-3 md:text-2xl font-bold flex items-center">
                OUR MISSION
              </p>
              <p className="text-base md:text-lg">
                Climate change is the greatest threat to humanity, perhaps ever.
                Global temperatures are rising at an unprecedented rate, causing
                drought and forest fires and impacting human health.
              </p>
            </div>
            <div className="flex flex-col justify-center md:p-8 md:pt-0">
              <p className="text-lg py-3 md:text-2xl font-bold flex items-center">
                OUR VISION
              </p>
              <p className="text-base md:text-lg">
                The environment is where we all meet; where we all have a mutual
                interest it is the one thing all of us share.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={climateChange}
              alt="about1"
              className="object-cover"
              style={{ width: "500px" }}
            />
          </div>
        </div>
      </section>
      <section className="max-w-screen-lg m-auto p-6 text-base">
        <h2 className="font-bold text-2xl py-2">Who we are</h2>
        <p className="px-4">
          Kami adalah Mahasiswa Institut Teknologi Telkom Purwokerto yang
          memiliki rasa kepedulian terhadap perubahan iklim yang sedang terjadi
          saat ini. Tujuan dibuatnya tim ini untuk mengkampanyekan gerakan
          pencegahan dan penanganan perubahan iklim serta mengedukasi orang lain
          agar menumbuhkan rasa kepedulian yang sama
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 p-4 gap-2">
          <div>
            <Image
              src={solutions}
              alt="Alan"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="px-2">
              <p className="font-bold text-lg">Maulana Dimyati</p>
              <p className="text-sm">20104061</p>
            </div>
            <div className="flex gap-1 justify-end px-2 text-lg">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaGithub />
              </a>
            </div>
          </div>
          <div>
            <Image
              src={solutions}
              alt="Alan"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="px-2">
              <p className="font-bold text-lg">Muhammad Irfani</p>
              <p className="text-sm">20104061</p>
            </div>
            <div className="flex gap-1 justify-end px-2 text-lg">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaGithub />
              </a>
            </div>
          </div>
          <div>
            <Image
              src={solutions}
              alt="Alan"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="px-2">
              <p className="font-bold text-lg">Singgih Budi Hartono</p>
              <p className="text-sm">20104061</p>
            </div>
            <div className="flex gap-1 justify-end px-2 text-lg">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaGithub />
              </a>
            </div>
          </div>
          <div>
            <Image
              src={solutions}
              alt="Alan"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="px-2">
              <p className="font-bold text-lg">Maulana Dimyati</p>
              <p className="text-sm">20104061</p>
            </div>
            <div className="flex gap-1 justify-end px-2 text-lg">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaGithub />
              </a>
            </div>
          </div> 
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
