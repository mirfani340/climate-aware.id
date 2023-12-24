import React from "react";
import MainLayout from "@/layouts/MainLayout";

import Image from "next/image";
import solutions from "../../public/images/solutions.jpg";

export const metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <MainLayout>
      <section className="text-white relative">
        <Image src={solutions} alt="about1" className="h-420px object-cover" />
        <div
          className="absolute text-center w-full h-full flex flex-col justify-center"
          id="textOverlay"
        >
          <h2 className="font-bold text-base py-1">SOLUTIONS</h2>
          <p className="font-bold text-xl">
            What is Being Done to <br /> Solve Climate Change?
          </p>
          <p className="text-xs py-1">
            Diperlukan langkah yang tepat untuk menanggulangi dan menangani{" "}
            <br /> dampak dari perubahan iklim
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
