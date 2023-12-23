import React from "react";
import MainLayout from "@/layouts/MainLayout";

import Image from "next/image";
import solutions from "../../../public/images/solutions.jpg";
import energibersih from "../../../public/images/energi-bersih.webp";

import sealevel from "../../../public/images/sealevel2.jpg";
import cuaca from "../../../public/images/cuaca.jpg";
import terumbu from "../../../public/images/terumbu.jpg";
import gajah from "../../../public/images/gajah.jpg";

export const metadata = {
  title: "Educations - Solutions",
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
        <div className="text-sm max-w-screen-sm m-auto">
          <p className="my-2">
            Menanggulangi perubahan iklim memerlukan upaya bersama dari seluruh
            masyarakat, pemerintah, bisnis, dan organisasi di seluruh dunia.
          </p>
          <p className="my-2">
            Berikut adalah beberapa solusi dan tindakan yang dapat diambil untuk
            mengurangi dampak perubahan iklim:
          </p>
          <div>
            <h2 className="font-bold mb-2">1. Pergeseran ke Energi Bersih</h2>
            <div className="px-4 py-2 text-center flex flex-col gap-2">
              <Image src={energibersih} alt="energi bersih" />
              <span style={{ fontSize: "10px" }}>Foto: climate.nasa.gov</span>
            </div>
            <p className="pb-2">
              Energi bersih adalah istilah yang merujuk pada sumber energi dan
              teknologi yang memiliki dampak lingkungan yang lebih rendah atau
              bahkan tidak mencemari lingkungan dibandingkan dengan sumber
              energi konvensional yang banyak digunakan. Energi bersih berfokus
              pada pengurangan emisi gas rumah kaca, polusi udara, dan dampak
              negatif lainnya terhadap lingkungan.
            </p>
            <div className="pb-2">
              <p className="font-semibold">
                Energi Terbarukan diantaranya: <br />
              </p>
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">Energi Matahari:</p> Pembangkit
                  listrik tenaga surya menggunakan sinar matahari untuk
                  menghasilkan listrik. <br />
                </li>
                <li>
                  <p className="font-semibold">Energi Angin: </p> Turbin angin
                  mengubah energi kinetik angin menjadi energi listrik. <br />
                </li>
                <li>
                  <p className="font-semibold">Energi Hidro:</p> Pembangkit
                  listrik tenaga air mengonversi energi air mengalir menjadi
                  listrik. <br />
                </li>
                <li>
                  <p className="font-semibold">Energi Biomassa:</p> Biomassa,
                  seperti limbah organik dan kayu, digunakan untuk menghasilkan
                  energi termal atau listrik.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Energi Geotermal:</p> Panas bumi
                  digunakan untuk menghasilkan uap yang digunakan untuk
                  menggerakkan turbin listrik.
                </li>
              </ul>
            </div>
            <div className="pb-2">
              <p className="font-semibold">
                Energi Nuklir: <br />
              </p>
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">Reaktor Nuklir:</p> Meskipun
                  kontroversial, pembangkit listrik tenaga nuklir menggunakan
                  reaksi nuklir untuk menghasilkan energi tanpa menghasilkan
                  emisi gas rumah kaca selama operasionalnya.
                </li>
              </ul>
            </div>
            <div className="pb-2">
              <p className="font-semibold">
                Energi Pasif dan Efisiensi Energi: <br />
              </p>
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">
                    Desain Bangunan Efisien Energi:
                  </p>
                  Bangunan yang dirancang untuk meminimalkan konsumsi energi dan
                  memaksimalkan penggunaan sumber daya alam.
                </li>
                <li>
                  <p className="font-semibold">
                    Peralatan Rumah Tangga Efisien Energi:
                  </p>
                  Peralatan elektronik dan rumah tangga yang dirancang untuk
                  mengurangi konsumsi energi.
                </li>
              </ul>
            </div>
            <p>
              Namun, penting untuk dicatat bahwa beberapa teknologi energi
              bersih juga memiliki tantangan dan dampak lingkungan yang perlu
              dikelola, seperti dampak lingkungan produksi dan pembuangan
              material teknologi terbarukan tertentu. Oleh karena itu, sumber
              energi bersih harus dikembangkan dan diimplementasikan dengan
              mempertimbangkan aspek-aspek berkelanjutan dan lingkungan.
            </p>
          </div>
          <div>
            <h2 className="font-bold my-2">2. Perubahan Pola Cuaca</h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image src={cuaca} alt="hutan" className="object-cover" />
              <span style={{ fontSize: "10px" }}>Sumber: js.UGM.ac.id</span>
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
            <h2 className="font-bold my-2">
              3. Gangguan Ekosistem dan Keanekaragaman Hayati
            </h2>
            <div className="grid grid-cols-2 gap-2 px-4 py-2 text-center">
              <Image src={gajah} alt="gajah" />
              <Image src={terumbu} alt="terumbu" />
              <span style={{ fontSize: "10px" }}>Foto: Mongabay</span>
              <span style={{ fontSize: "10px" }}>
                Kerusakan terumbu Karang di Indonesia Dampak Perubahan Iklim,
                Mongabay.co.id
              </span>
            </div>
            <p className="pb-2">
              Perubahan iklim dapat mengubah kondisi lingkungan dan menyebabkan
              gangguan pada ekosistem. Pergeseran distribusi geografis spesies
              dapat mengancam keanekaragaman hayati dan menyebabkan kepunahan
              spesies.
            </p>
            <p className="pb-2">
              Perubahan iklim dapat memberikan dampak yang signifikan terhadap
              ekosistem dan keanekaragaman hayati di seluruh dunia. Perubahan
              iklim ini dapat menyebabkan gangguan pada berbagai tingkatan
              ekosistem, mulai dari ekosistem darat hingga ekosistem laut.
            </p>
            <p className="pb-2">
              Perubahan iklim dapat mengakibatkan perubahan dalam pola curah
              hujan, termasuk peningkatan kejadian banjir atau kekeringan.
              Ekosistem darat seperti hutan dan padang rumput dapat mengalami
              perubahan dalam komposisi tumbuhan dan kehilangan habitat untuk
              beberapa spesies. Kondisi ekosistem yang tidak stabil dapat
              mengancam keberlanjutan populasi dan keanekaragaman hayati.
            </p>
            <p>
              Peningkatan suhu global dapat menyebabkan perubahan iklim lokal,
              termasuk kenaikan suhu rata-rata di berbagai wilayah. Spesies
              tumbuhan dan hewan yang tidak dapat beradaptasi dengan perubahan
              suhu dapat menghadapi risiko kepunahan. Perubahan suhu juga dapat
              mempengaruhi ekosistem air dan laut, mengarah pada perubahan
              distribusi spesies dan migrasi yang tidak terduga.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
