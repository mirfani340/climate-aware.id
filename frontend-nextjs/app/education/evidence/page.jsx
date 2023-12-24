import React from "react";
import MainLayout from "@/layouts/MainLayout";

import Image from "next/image";
import evidence from "../../../public/images/evidence.jpg";
import globalTemp from "../../../public/images/global-temp.png";
import salju1 from "../../../public/images/salju1.webp";
import salju2 from "../../../public/images/salju2.jpg";
import hutan1 from "../../../public/images/hutan1.jpg";
import cuaca from "../../../public/images/cuaca.jpg";
import sealevel from "../../../public/images/sealevel.jpg";

export const metadata = {
  title: "Educations - Evidence",
};

const page = () => {
  return (
    <MainLayout>
      <section className="text-white relative">
        <Image src={evidence} alt="evidence" className="h-420px w-full object-cover" />
        <div
          className="absolute text-center w-full h-full flex flex-col justify-center"
          id="textOverlay"
        >
          <h2 className="font-bold text-2xl py-1">EVIDENCE</h2>
          <p className="font-bold text-4xl">
            How Do We Know <br /> Climate Change Is Real?
          </p>
          <p className="text-base md:text-xl py-1">
            Bukti perubahan iklim terjadi dapat dilihat <br /> dari berbagai
            data dan fenomena di seluruh dunia.
          </p>
        </div>
      </section>
      <section className="p-6">
        <div className="drawer hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label className="btn drawer-button" htmlFor="my-drawer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content z-20">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <aside className="hidden">
          Pada halaman ini
          <ul>
            <li>
              <a href="">History</a>
            </li>
            <li>
              <a href="">Evidence</a>
            </li>
            <li>
              <a href="">References</a>
            </li>
          </ul>
        </aside>
        <div className="max-w-screen-sm m-auto text-lg">
          <h1 className="my-2">
            Berikut adalah beberapa bukti yang mendukung perubahan iklim:
          </h1>
          <div>
            <h2 className="font-bold mb-2">1. Peningkatan Suhu Global</h2>
            <div className="px-4 py-2 text-center flex flex-col gap-2">
              <Image src={globalTemp} alt="global temp" />
              <span style={{ fontSize: "12px" }}>Sumber: WMO, 2019</span>
            </div>
            <p className="pb-2">
              Rekaman suhu global menunjukkan peningkatan yang signifikan selama
              beberapa dekade terakhir. Pemanasan global ini tercermin dalam
              data suhu permukaan laut dan daratan.
            </p>
            <p className="pb-2">
              Peningkatan suhu global merujuk pada kenaikan suhu rata-rata
              atmosfer bumi secara keseluruhan selama periode waktu tertentu.
              Fenomena ini merupakan hasil dari perubahan iklim global yang
              disebabkan oleh peningkatan konsentrasi gas-gas rumah kaca dalam
              atmosfer, terutama karbon dioksida (CO2), metana (CH4), dan
              nitrous oksida (N2O).
            </p>
            <p className="pb-2">
              Aktivitas manusia, terutama pembakaran bahan bakar fosil untuk
              energi, deforestasi, dan industri, melepaskan gas-gas rumah kaca
              ke atmosfer. Gas-gas ini memperkuat efek rumah kaca, yang
              menyebabkan peningkatan retensi panas di atmosfer.
            </p>
            <p>
              Suhu yang lebih tinggi dapat mempengaruhi distribusi geografis
              spesies, menyebabkan migrasi dan perubahan dalam ekosistem.
              Spesies yang tidak dapat beradaptasi dengan cepat dapat menghadapi
              risiko kepunahan.
            </p>
          </div>
          <div>
            <h2 className="font-bold my-2">
              2. Pengurangan Tutupan Salju dan Es
            </h2>
            <div className="grid grid-cols-2 gap-2 px-4 py-2 text-center">
              <Image src={salju1} alt="salju" />
              <Image src={salju2} alt="salju" />
            </div>
            <p className="pb-2">
              Perubahan dalam tutupan es di Puncak Jaya, atau lebih dikenal
              sebagai Carstensz Pyramid, yang merupakan puncak tertinggi di
              Oceania dan terletak di Provinsi Papua, Indonesia, juga dapat
              berdampak pada ekosistem dan lingkungan sekitarnya
            </p>
            <p>
              Area tutupan salju di Kutub Utara dan Selatan menunjukkan
              penurunan yang signifikan, dan es laut di beberapa wilayah
              mengalami pencairan yang cepat.
            </p>
          </div>
          <div>
            <h2 className="font-bold my-2">3. Kenaikan Permukaan Air Laut</h2>
            <div className="px-4 py-2 flex flex-col items-center gap-2">
              <Image src={sealevel} alt="sea level" />
              <span style={{ fontSize: "12px" }}>Sumber: Kumparan</span>
            </div>
            <p className="pb-2">
              Kenaikan suhu menyebabkan pelelehan gletser dan es di kutub, yang
              menyebabkan kenaikan permukaan laut. Data menunjukkan kenaikan
              tinggi permukaan laut secara global.
            </p>
            <p className="pb-2">
              Hanya dalam 30 tahun, dari 1993 hingga 2023, rata-rata permukaan
              air laut dunia telah naik lebih dari 9 sentimeter (cm) karena
              perubahan iklim.
            </p>
            <p>
              Kenaikan permukaan air laut tersebut dianimasikan oleh badan
              antariksa AS, National Aeronautics and Space Administration
              (NASA), melalui animasi yang dirilis di website-nya. Animasi
              tersebut dibuat oleh Andrew J Christensen, visualisator data untuk
              Studio Visualisasi Ilmiah NASA dan dirilis pada 16 Juni 2023.
            </p>
          </div>
          <div>
            <h2 className="font-bold my-2">4. Perubahan Pola Cuaca</h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image src={cuaca} alt="hutan" className="object-cover" />
              <span style={{ fontSize: "12px" }}>Sumber: js.UGM.ac.id</span>
            </div>
            <p className="pb-2">
              Perubahan dalam pola cuaca, termasuk peningkatan kejadian cuaca
              ekstrem seperti badai, banjir, kekeringan, dan topan.
            </p>
            <p className="pb-2">
              Perubahan pola cuaca mengacu pada pergeseran atau perubahan dalam
              karakteristik dan perilaku cuaca yang terjadi dalam periode waktu
              yang lebih panjang. Perubahan ini dapat mencakup variasi dalam
              suhu, presipitasi (hujan dan salju), kelembaban udara, kecepatan
              dan arah angin, dan frekuensi kejadian cuaca ekstrem.
            </p>
            <p>
              Perubahan pola cuaca dapat disebabkan oleh berbagai faktor,
              termasuk perubahan iklim global dan variasi alamiah dalam sistem
              atmosfer.
            </p>
          </div>
          <div>
            <h2 className="font-bold my-2">5. Perubahan Hutan dan Ekosistem</h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image src={hutan1} alt="hutan" className="object-cover" />
              <span style={{ fontSize: "12px" }}>Sumber: Tim Cronin CIFOR, 2016</span>
            </div>
            <p className="pb-2">
              Perubahan iklim dapat mempengaruhi distribusi geografis hewan dan
              tumbuhan serta mengakibatkan perubahan pada ekosistem dan
              keragaman hayati.
            </p>
            <p className="pb-2">
              Perubahan hutan dan ekosistem terjadi sebagai dampak dari berbagai
              faktor, termasuk aktivitas manusia, perubahan iklim, dan faktor
              alamiah. Perubahan ini dapat memiliki dampak besar pada
              keanekaragaman hayati, sumber daya alam, dan keseimbangan
              ekosistem.
            </p>
            <p className="pb-2">
              Deforestasi adalah penghilangan hutan secara besar-besaran oleh
              manusia. Ini dapat dilakukan untuk membuka lahan pertanian,
              penebangan kayu, dan ekspansi perkotaan. Deforestasi mengakibatkan
              hilangnya habitat, berkurangnya keanekaragaman hayati, dan
              kontribusi terhadap perubahan iklim.
            </p>
            <p>
              Degradasi hutan melibatkan kerusakan atau penurunan kualitas hutan
              tanpa penghilangan total. Ini dapat melibatkan penebangan
              selektif, kebakaran hutan, dan aktivitas lain yang merusak
              struktur ekosistem hutan.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
