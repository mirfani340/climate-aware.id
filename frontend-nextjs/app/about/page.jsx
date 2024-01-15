import React from "react";
import MainLayout from "@/layouts/MainLayout";

import Image from "next/image";
import solutions from "../../public/images/solutions.webp";
import vision from "../../public/images/vision.webp";
import missions from "../../public/images/climate-change.webp";

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
          className="absolute text-center w-full h-full flex flex-col md:flex-row justify-end md:justify-start md:items-center p-6 md:p-16"
          id="textOverlay"
        >
          <h2 className="font-bold text-4xl py-1 md:text-5xl">About Us</h2>
        </div>
      </section>
      <section id="section-2" className="bg-white">
        <div className="p-6 flex flex-col justify-center items-center">
          <h2 className="font-bold text-2xl">WHO WE ARE</h2>
          <p className="p-6 pt-3 text-center md:max-w-screen-md">
          We are students from Telkom Institute of Technology Purwokerto who have a concern for the current climate change. 
          The purpose of forming this team is to campaign for the prevention and handling of climate change, 
          as well as to educate others to cultivate the same sense of concern
          </p>
          {/* <p className="p-6 pt-3 text-center md:max-w-screen-md">
            Kami adalah Mahasiswa Institut Teknologi Telkom Purwokerto yang
            memiliki rasa kepedulian terhadap perubahan iklim yang sedang
            terjadi saat ini. Tujuan dibuatnya tim ini untuk mengkampanyekan
            gerakan pencegahan dan penanganan perubahan iklim serta mengedukasi
            orang lain agar menumbuhkan rasa kepedulian yang sama
          </p> */}
        </div>
      </section>
      <section id="section-3" className="bg-white">
        <div className="grid p-6 gap-5">
          <div className="grid grid-flow-col md:grid-cols-3 justify-center gap-6 md:p-8 md:pb-4">
            <Image
              src={vision}
              alt="vision"
              className="hidden md:block h-300px md:h-full w-full object-cover"
            />
            <div className="col-span-2 md:flex md:flex-col md:items-center md:justify-center md:px-4">
              <p className="text-lg py-3 md:text-2xl font-bold flex items-center">
                OUR VISION
              </p>
              <p className="text-base md:text-lg md:text-center">
                Become a leading online platform committed to fostering
                awareness, understanding, and action on climate change, striving
                for a sustainable and resilient future for the planet and its
                inhabitants.
              </p>
              <p></p>
            </div>
          </div>
          <div className="grid grid-flow-col md:grid-cols-3 md:justify-center gap-6 md:p-8 md:pb-4">
            <div className="col-span-2 md:px-4">
              <p className="text-lg py-3 md:text-2xl font-bold flex items-center">
                OUR MISSIONS
              </p>
              <ul className="md:pt-2 px-8 flex flex-col gap-2">
                <li className="list-disc">
                  <p className="text-lg font-semibold">Raise Awareness</p>
                  <p className="text-justify">
                    Educate individuals about the urgent realities of climate
                    change through comprehensive and accessible information,
                    compelling narratives, and engaging multimedia content.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-lg font-semibold">Inspire Action</p>
                  <p className="text-justify">
                    Motivate and empower individuals, communities, businesses,
                    and governments to take tangible steps toward mitigating and
                    adapting to climate change.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-lg font-semibold">Promote Innovation</p>
                  <p className="text-justify">
                    Showcase and support innovative solutions and technologies
                    that contribute to climate change mitigation, adaptation,
                    and sustainable living.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-lg font-semibold">
                    Encourage Education and Research
                  </p>
                  <p className="text-justify">
                    Support and promote research initiatives focused on climate
                    change, sustainability, and environmental conservation,
                    fostering a culture of continuous learning.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-lg font-semibold">
                    Measure and Report Impact
                  </p>
                  <p className="text-justify">
                    Implement transparent and accountable mechanisms to measure
                    the impact of awareness and action initiatives, sharing
                    progress and outcomes with the community.
                  </p>
                </li>
              </ul>
              <p></p>
            </div>
            <Image
              src={missions}
              alt="missions"
              className="hidden md:block h-300px md:h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section id="section-4" className="max-w-screen-lg m-auto p-6 text-base">
        <h2 className="font-bold text-2xl pb-6 text-center">MEET THE TEAM</h2>
        <div className="grid p-4 gap-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <Image
              src={solutions}
              alt="Alan"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="flex flex-col p-4 gap-4">
              <div className="px-2">
                <p className="font-bold text-lg">Maulana Dimyati</p>
                <p className="text-sm">Frontend Developer</p>
              </div>
              <div className="flex md:flex-col gap-1 px-2">
                <a
                  href="https://www.instagram.com/alanmau_"
                  className="flex items-center gap-2"
                >
                  <FaInstagram className="text-xl" />
                  <p className="hidden md:block">alanmau_</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/maulanadimyati"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin className="text-xl" />
                  <p className="hidden md:block">maulanadimyati</p>
                </a>
                <a
                  href="https://github.com/dimyatimaulana"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="text-xl" />
                  <p className="hidden md:block">dimyatimaulana</p>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div></div>
            <div></div>
            <div className="flex flex-col p-4 gap-4">
              <div className="px-2">
                <p className="font-bold text-lg">Singgih Budi Hartono</p>
                <p className="text-sm">Backend Developer</p>
              </div>
              <div className="flex md:flex-col gap-1 px-2">
                <a
                  href="https://www.instagram.com/sbudi_h/"
                  className="flex items-center gap-2"
                >
                  <FaInstagram className="text-xl" />
                  <p className="hidden md:block">sbudi_h</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/singgih-budi-hartono-675413222"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin className="text-xl" />
                  <p className="hidden md:block">singgihbudi</p>
                </a>
                <a
                  href="https://github.com/Mr-buddyy"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="text-xl" />
                  <p className="hidden md:block">Mr-buddyy</p>
                </a>
              </div>
            </div>
            <Image
              src={solutions}
              alt="Singgih"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <Image
              src={solutions}
              alt="Irfan"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="flex flex-col p-4 gap-4">
              <div className="px-2">
                <p className="font-bold text-lg">Muhhamad Irfani</p>
                <p className="text-sm">DevOps</p>
              </div>
              <div className="flex md:flex-col gap-1 px-2">
                <a
                  href="https://www.instagram.com/mirfani340"
                  className="flex items-center gap-2"
                >
                  <FaInstagram className="text-xl" />
                  <p className="hidden md:block">mirfani340</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/mirfani340"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin className="text-xl" />
                  <p className="hidden md:block">mirfani340</p>
                </a>
                <a
                  href="https://github.com/mirfani340"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="text-xl" />
                  <p className="hidden md:block">mirfani340</p>
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div></div>
            <div></div>
            <div className="flex flex-col p-4 gap-4">
              <div className="px-2">
                <p className="font-bold text-lg">Muhammad Fajar Nasrullah</p>
                <p className="text-sm">UI/UX Designer</p>
              </div>
              <div className="flex md:flex-col gap-1 px-2">
                <a
                  href="https://www.instagram.com/jeraa__"
                  className="flex items-center gap-2"
                >
                  <FaInstagram className="text-xl" />
                  <p className="hidden md:block">jeraa__</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/fajarnasrullah"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin className="text-xl" />
                  <p className="hidden md:block">fajarnasrullah</p>
                </a>
                <a
                  href="https://github.com/fajarnasrullah"
                  className="flex items-center gap-2"
                >
                  <FaGithub className="text-xl" />
                  <p className="hidden md:block">fajarnasrullah</p>
                </a>
              </div>
            </div>
            <Image
              src={solutions}
              alt="Alan"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
