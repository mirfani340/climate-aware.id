import React from "react";
import MainLayout from "@/layouts/MainLayout";

import Image from "next/image";
import causes from "../../../public/images/causes.jpg";
import greenhouse from "../../../public/images/greenhouse.jpg";
import fosil from "../../../public/images/fosil.jpeg";
import sealevel from "../../../public/images/sealevel.jpg";
import esnasa from "../../..//public/images/esnasa.webp";
import hutan from "../../../public/images/hutan1.jpg";
import worldpopulation from "../../../public/images/world-population.jpg";

export const metadata = {
  title: "Educations - Causes",
};

const page = () => {
  return (
    <MainLayout>
      <section className="text-white relative">
        <Image src={causes} alt="about1" className="h-420px object-cover" />
        <div
          className="absolute text-center w-full h-full flex flex-col justify-center"
          id="textOverlay"
        >
          <h2 className="font-bold text-base py-1">CAUSES</h2>
          <p className="font-bold text-xl">
            Why is Climate Change <br /> Happening?
          </p>
          <p className="text-xs py-1">
            Perubahan iklim tentu tidak datang tanpa sebab <br /> melainkan
            akibat dari suatu kejadian.
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
            Perubahan iklim disebabkan oleh berbagai faktor, baik alami maupun
            buatan manusia. Namun, saat ini, banyak bukti menunjukkan bahwa
            perubahan iklim yang sedang terjadi sebagian besar disebabkan oleh
            aktivitas manusia.
          </p>
          <p className="my-2">
            Berikut adalah beberapa penyebab utama perubahan iklim:
          </p>
          <div>
            <h2 className="font-bold mb-2">1. Emisi Gas Rumah Kaca</h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image
                src={greenhouse}
                alt="green house effect"
                className="w-300px"
              />
              <span style={{ fontSize: "10px" }}>Foto: NASA/JPL-Caltech</span>
            </div>
            <p className="pb-2">
              Peningkatan emisi gas rumah kaca adalah penyebab utama perubahan
              iklim. Gas-gas ini, seperti karbon dioksida (CO2), metana (CH4),
              dan nitrous oksida (N2O), memperkuat efek rumah kaca, yang
              menyebabkan peningkatan retensi panas di atmosfer. Aktivitas
              manusia, termasuk pembakaran bahan bakar fosil, deforestasi, dan
              produksi industri, menyumbang secara signifikan pada emisi gas
              rumah kaca.
            </p>
            <p className="pb-2">
              Gas-gas di atmosfer, seperti karbon dioksida (CO2), metana (CH4),
              dan uap air, dapat menyerap sebagian radiasi inframerah yang
              dipancarkan oleh Bumi. Ini mengakibatkan penahanan panas di dalam
              atmosfer, menciptakan kondisi yang lebih hangat daripada jika
              tidak ada gas-gas ini. Analogi efek rumah kaca dapat
              diilustrasikan dengan analogi ruang hijau, di mana radiasi masuk
              lebih mudah daripada radiasi keluar.
            </p>
            <p className="pb-2">
              Aktivitas manusia, seperti pembakaran bahan bakar fosil,
              deforestasi, dan kegiatan industri, dapat meningkatkan konsentrasi
              gas-gas rumah kaca di atmosfer. Peningkatan konsentrasi ini dapat
              memperkuat efek rumah kaca dan menyebabkan peningkatan suhu
              global, yang dikenal sebagai pemanasan global atau perubahan
              iklim.
            </p>
            <p>
              Penting untuk mencatat bahwa efek rumah kaca sendiri adalah
              fenomena alam yang alami dan diperlukan untuk menjaga suhu Bumi
              pada tingkat yang mendukung kehidupan. Namun, peningkatan
              konsentrasi gas-gas rumah kaca akibat aktivitas manusia dapat
              menyebabkan perubahan iklim yang tidak diinginkan dan dapat
              membahayakan ekosistem Bumi. Upaya untuk mengurangi emisi gas-gas
              rumah kaca telah menjadi fokus utama dalam rangka menangani
              perubahan iklim global.
            </p>
          </div>
          <div>
            <h2 className="font-bold my-2">2. Pembakaran Bahan Bakar Fosil</h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image src={fosil} alt="fosil" className="px-4" />
              <span style={{ fontSize: "10px" }}>Foto: DW (News)</span>
            </div>
            <p className="pb-2">
              Pembakaran bahan bakar fosil adalah proses di mana bahan bakar
              fosil, seperti batu bara, minyak bumi, dan gas alam, dibakar untuk
              menghasilkan energi. Proses ini umumnya terjadi dalam pembangkit
              listrik, kendaraan bermotor, dan industri.
            </p>
            <p className="pb-2">
              Meskipun pembakaran bahan bakar fosil memberikan energi yang
              diperlukan untuk memenuhi kebutuhan manusia, proses ini juga
              menyebabkan emisi gas-gas rumah kaca dan polutan udara lainnya,
              yang memiliki dampak negatif terhadap lingkungan dan kesehatan
              manusia.
            </p>
            <p>
              Dalam upaya untuk mengatasi dampak negatif pembakaran bahan bakar
              fosil, banyak negara dan organisasi sedang mencari alternatif
              energi yang lebih bersih dan berkelanjutan, seperti energi
              terbarukan (surya, angin, hidro, dan lain-lain) serta teknologi
              energi nuklir yang aman.
            </p>
          </div>
          <div>
            <h2 className="font-bold my-2">3. Pemanasan Laut dan Pelehan Es</h2>
            <div className="grid grid-cols-2 gap-2 px-4 py-2 text-center">
              <Image
                src={sealevel}
                alt="sea level"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Image
                src={esnasa}
                alt="sea level"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <span style={{ fontSize: "10px" }}>Foto: Kompas</span>
              <span style={{ fontSize: "8px" }}>
                GAMBAR SATELIT LAPISAN ES DI PULAU EAGLE ANTARTIKA SEPANJANG
                FEBRUARI 2020. JOSHUA STEVENS/LANDSAT/USGS
              </span>
            </div>
            <p className="pb-2">
              Kenaikan permukaan air laut merujuk pada fenomena di mana
              permukaan laut secara bertahap meningkat. Proses ini terkait erat
              dengan perubahan iklim global dan memiliki dampak signifikan
              terutama pada wilayah pesisir.
            </p>
            <p className="pb-2">
              Beberapa faktor utama yang menyebabkan kenaikan permukaan air laut
              melibatkan perubahan iklim dan dinamika laut.
            </p>
            <p className="pb-2">
              Pemanasan global menyebabkan pencairan es di kutub dan gletser di
              seluruh dunia. Air yang dilepaskan dari es yang mencair menyumbang
              pada kenaikan volume air laut.
            </p>
            <p className="pb-2">
              Pemanasan global juga menyebabkan ekspansi termal air laut. Air
              yang menjadi lebih hangat memiliki volume yang lebih besar, dan
              ini menyebabkan kenaikan permukaan air laut.
            </p>
            <p className="pb-2">
              Lapisan es di Greenland dan Antartika mengalami pembengkakan atau
              pencairan yang signifikan. Pembengkakan dapat menambahkan volume
              air laut, sementara pencairan dapat melepaskan air ke laut.
            </p>
            <p>
              Perubahan dalam arus laut dan sirkulasi dapat mempengaruhi
              distribusi air di seluruh dunia, menyebabkan kenaikan permukaan
              air laut di beberapa wilayah dan penurunan di tempat lain.
            </p>
          </div>
          <div>
            <h2 className="font-bold my-2">
              4. Deforestasi dan Perubahan Penggunaan Lahan
            </h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image src={hutan} alt="hutan" className="object-cover" />
              <span style={{ fontSize: "10px" }}>
                Pembersihan ladang di Danau Sentarum, Kalimantan Barat. Saat ini
                akibat tekanan sosial ekonomi terjadi perubahan pola penggunaan
                lahan tradisional. Tim Cronin/CIFOR
              </span>
            </div>
            <p className="pb-2">
              Penggundulan hutan adalah tindakan manusia yang melibatkan
              penebangan dan penghilangan sebagian atau seluruh hutan. Praktik
              ini dapat memiliki dampak serius terhadap lingkungan dan berbagai
              aspek kehidupan di planet ini.
            </p>
            <p className="pb-2">
              Banyak hutan di dunia ditebang untuk memberikan ruang bagi
              pertanian dan perkebunan. Praktik ini seringkali melibatkan metode
              pembakaran, yang dapat merusak tanah dan menghasilkan emisi gas
              rumah kaca.
            </p>
            <p className="pb-2">
              Penebangan hutan untuk produksi kayu dan produk kayu lainnya
              merupakan penyebab utama penggundulan hutan. Ini terjadi baik
              untuk memenuhi permintaan pasar lokal maupun internasional.
            </p>
            <p className="pb-2">
              Pengembangan infrastruktur seperti jalan, bendungan, dan pemukiman
              seringkali melibatkan penebangan hutan. Ini dapat merusak
              ekosistem dan menyebabkan hilangnya habitat. Kebakaran hutan, baik
              yang alami maupun disebabkan oleh aktivitas manusia seperti
              pembakaran lahan, dapat menyebabkan penggundulan hutan yang luas.
            </p>
            <p>
              Penggundulan hutan secara besar-besaran (deforestasi) menyebabkan
              pelepasan karbon yang disimpan dalam tanaman dan tanah ke
              atmosfer. Perubahan penggunaan lahan, seperti konversi hutan
              menjadi lahan pertanian atau perkotaan, juga dapat menyebabkan
              pelepasan gas rumah kaca dan mengubah karakteristik permukaan
              bumi.
            </p>
          </div>
          <div>
            <h2 className="font-bold my-2">
              5. Pertambahan Populasi dan Pertumbuhan Ekonomi
            </h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image
                src={worldpopulation}
                alt="hutan"
                className="object-cover"
              />
              <span className="text-xs">Sumber: Our World in Data</span>
            </div>
            <p className="pb-2">
              Pertambahan populasi manusia dan pertumbuhan ekonomi dapat
              meningkatkan permintaan akan sumber daya alam, energi, dan
              produksi makanan, yang dapat berkontribusi pada emisi gas rumah
              kaca.
            </p>
            <p className="pb-2">
              Pertambahan populasi menyebabkan peningkatan permintaan akan
              sumber daya seperti makanan, air, energi, dan lahan. Jika
              permintaan ini tidak diimbangi dengan upaya berkelanjutan, dapat
              terjadi degradasi lingkungan dan kekurangan sumber daya.
            </p>
            <p className="pb-2">
              Sementara pertumbuhan ekonomi dapat meningkatkan konsumsi energi
              dan sumber daya, tantangan berkelanjutan adalah mengurangi dampak
              lingkungan dan beralih ke model ekonomi yang lebih berkelanjutan.
            </p>
            <p className="pb-2">
              Pertumbuhan ekonomi yang tidak berkelanjutan dapat menyebabkan
              peningkatan emisi gas rumah kaca, menyumbang pada perubahan iklim
              global.
            </p>
            <p>
              Pentingnya mengelola pertambahan populasi dan pertumbuhan ekonomi
              dengan bijaksana dan berkelanjutan menjadi semakin mendesak untuk
              menjaga keseimbangan antara kebutuhan manusia dan kesehatan
              planet. Upaya-upaya untuk mencapai pembangunan berkelanjutan
              melibatkan perencanaan populasi, kebijakan lingkungan, dan
              strategi ekonomi yang berfokus pada keberlanjutan.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
