import React from "react";
import MainLayout from "@/layouts/MainLayout";

import Image from "next/image";

import effects from "../../../public/images/effects.webp";
import sealevel from "../../../public/images/sealevel2.webp";
import cuaca from "../../../public/images/cuaca.webp";
import terumbu from "../../../public/images/terumbu.webp";
import gajah from "../../../public/images/gajah.webp";

export const metadata = {
  title: "Educations - Effects",
};

const page = () => {
  return (
    <MainLayout>
      <section className="text-white relative">
        <Image
          src={effects}
          alt="effects"
          className="h-420px w-full object-cover"
        />
        <div
          className="absolute text-center w-full h-full flex flex-col justify-center"
          id="textOverlay"
        >
          <h2 className="font-bold text-2xl py-1">EFFECTS</h2>
          <p className="font-bold text-4xl">
            What are the effects of <br /> Climate Change?
          </p>
          <p className="text-base md:text-xl py-1">
            Climate change has caused many losses,
            <br /> both those that have already occurred and those that are yet
            to come.
          </p>
          {/* <p className="text-base md:text-xl py-1">
            Perubahan iklim telah menyebabkan banyak kerugian <br /> baik yang
            sudah terjadi maupun yang belum terjadi.
          </p> */}
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
        <div className="max-w-screen-sm m-auto text-lg">
          <p className="my-2">
            Climate change has various effects involving changes in global
            temperature and weather patterns worldwide. These effects can impact
            the environment, ecosystems, and human life.
          </p>
          {/* <p className="my-2">
            Perubahan iklim memiliki berbagai efek yang melibatkan perubahan
            suhu global dan pola cuaca di seluruh dunia. Efek-efek ini dapat
            mempengaruhi lingkungan, ekosistem, dan kehidupan manusia.
          </p> */}
          <p className="my-2">Here are some effects of climate change:</p>
          {/* <p className="my-2">
            Berikut adalah beberapa efek dari perubahan iklim:
          </p> */}
          <div>
            <h2 className="font-bold mb-2">1. Sea Level Rise</h2>
            {/* <h2 className="font-bold mb-2">1. Kenaikan Permukaan Air Laut</h2> */}
            <div className="px-4 py-2 text-center flex flex-col gap-2">
              <Image src={sealevel} alt="sea level" />
              <span style={{ fontSize: "12px" }}>Source: Kompas</span>
              {/* <span style={{ fontSize: "12px" }}>Sumber: Kompas</span> */}
            </div>
            <p className="pb-2">
              Global warming causes the melting of ice at the poles and
              glaciers, contributing to the rise in sea level. This poses a
              threat to small islands, coastal areas, and coral reef ecosystems.
            </p>
            {/* <p className="pb-2">
              Pemanasan global menyebabkan pelelehan es di kutub dan gletser,
              yang berkontribusi pada kenaikan tinggi permukaan laut. Ini
              mengancam pulau-pulau kecil, daerah pesisir, dan ekosistem terumbu
              karang.
            </p> */}
            <p className="pb-2">
              In just 30 years, from 1993 to 2023, the average global sea level
              has risen more than 9 centimeters (cm) due to climate change.
            </p>
            {/* <p className="pb-2">
              Hanya dalam 30 tahun, dari 1993 hingga 2023, rata-rata permukaan
              air laut dunia telah naik lebih dari 9 sentimeter (cm) karena
              perubahan iklim.
            </p> */}
            <p>
              The rise in sea level was animated by the United States space
              agency, the National Aeronautics and Space Administration (NASA),
              through an animation released on its website. The animation was
              created by Andrew J. Christensen, a data visualizer for NASA's
              Scientific Visualization Studio, and was released on June 16,
              2023.
            </p>
            {/* <p>
              Kenaikan permukaan air laut tersebut dianimasikan oleh badan
              antariksa AS, National Aeronautics and Space Administration
              (NASA), melalui animasi yang dirilis di website-nya. Animasi
              tersebut dibuat oleh Andrew J Christensen, visualisator data untuk
              Studio Visualisasi Ilmiah NASA dan dirilis pada 16 Juni 2023.
            </p> */}
          </div>
          <div>
            <h2 className="font-bold my-2">2. Changes in Weather Patterns</h2>
            {/* <h2 className="font-bold my-2">2. Perubahan Pola Cuaca</h2> */}
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image src={cuaca} alt="hutan" className="object-cover" />
              <span style={{ fontSize: "12px" }}>Source: js.UGM.ac.id</span>
              {/* <span style={{ fontSize: "12px" }}>Sumber: js.UGM.ac.id</span> */}
            </div>
            <p className="pb-2">
              Changes in weather patterns, including an increase in the
              occurrence of extreme weather events such as storms, floods,
              droughts, and hurricanes.
            </p>
            {/* <p className="pb-2">
              Perubahan dalam pola cuaca, termasuk peningkatan kejadian cuaca
              ekstrem seperti badai, banjir, kekeringan, dan topan.
            </p> */}
            <p className="pb-2">
              Changes in weather patterns refer to shifts or alterations in the
              characteristics and behavior of weather that occur over longer
              periods. These changes can include variations in temperature,
              precipitation (rain and snow), air humidity, wind speed and
              direction, and the frequency of extreme weather events.
            </p>
            {/* <p className="pb-2">
              Perubahan pola cuaca mengacu pada pergeseran atau perubahan dalam
              karakteristik dan perilaku cuaca yang terjadi dalam periode waktu
              yang lebih panjang. Perubahan ini dapat mencakup variasi dalam
              suhu, presipitasi (hujan dan salju), kelembaban udara, kecepatan
              dan arah angin, dan frekuensi kejadian cuaca ekstrem.
            </p> */}
            <p>
              Changes in weather patterns can be caused by various factors,
              including global climate change and natural variations in the
              atmospheric system.
            </p>
            {/* <p>
              Perubahan pola cuaca dapat disebabkan oleh berbagai faktor,
              termasuk perubahan iklim global dan variasi alamiah dalam sistem
              atmosfer.
            </p> */}
          </div>
          <div>
            <h2 className="font-bold my-2">
              3. Ecosystem Disturbance and Biodiversity
            </h2>
            {/* <h2 className="font-bold my-2">
              3. Gangguan Ekosistem dan Keanekaragaman Hayati
            </h2> */}
            <div className="grid grid-cols-2 gap-2 px-4 py-2 text-center">
              <Image src={gajah} alt="gajah" />
              <Image src={terumbu} alt="terumbu" />
              <span style={{ fontSize: "12px" }}>Photo: Mongabay</span>
              <span style={{ fontSize: "12px" }}>
                Coral reef damage in Indonesia due to climate change,
                Mongabay.co.id
              </span>
              {/* <span style={{ fontSize: "12px" }}>Foto: Mongabay</span>
              <span style={{ fontSize: "12px" }}>
                Kerusakan terumbu Karang di Indonesia Dampak Perubahan Iklim,
                Mongabay.co.id
              </span> */}
            </div>
            <p className="pb-2">
              Climate change can alter environmental conditions and disrupt
              ecosystems. Shifting species' geographical distributions can
              threaten biodiversity and lead to species extinction.
            </p>
            {/* <p className="pb-2">
              Perubahan iklim dapat mengubah kondisi lingkungan dan menyebabkan
              gangguan pada ekosistem. Pergeseran distribusi geografis spesies
              dapat mengancam keanekaragaman hayati dan menyebabkan kepunahan
              spesies.
            </p> */}
            <p className="pb-2">
              Climate change can have significant impacts on ecosystems and
              biodiversity worldwide. It can disrupt ecosystems at various
              levels, ranging from terrestrial to marine ecosystems.
            </p>
            {/* <p className="pb-2">
              Perubahan iklim dapat memberikan dampak yang signifikan terhadap
              ekosistem dan keanekaragaman hayati di seluruh dunia. Perubahan
              iklim ini dapat menyebabkan gangguan pada berbagai tingkatan
              ekosistem, mulai dari ekosistem darat hingga ekosistem laut.
            </p> */}
            <p className="pb-2">
              Climate change can result in changes in rainfall patterns,
              including increased occurrences of floods or droughts. Terrestrial
              ecosystems such as forests and grasslands may experience
              alterations in plant composition and loss of habitat for some
              species. Unstable ecosystem conditions can jeopardize population
              sustainability and biodiversity.Climate change can result in
              changes in rainfall patterns, including increased occurrences of
              floods or droughts. Terrestrial ecosystems such as forests and
              grasslands may experience alterations in plant composition and
              loss of habitat for some species. Unstable ecosystem conditions
              can jeopardize population sustainability and biodiversity.
            </p>
            {/* <p className="pb-2">
              Perubahan iklim dapat mengakibatkan perubahan dalam pola curah
              hujan, termasuk peningkatan kejadian banjir atau kekeringan.
              Ekosistem darat seperti hutan dan padang rumput dapat mengalami
              perubahan dalam komposisi tumbuhan dan kehilangan habitat untuk
              beberapa spesies. Kondisi ekosistem yang tidak stabil dapat
              mengancam keberlanjutan populasi dan keanekaragaman hayati.
            </p> */}
            <p>
              The rise in global temperatures can cause changes in local
              climate, including an increase in average temperatures in various
              regions. Plant and animal species unable to adapt to temperature
              changes may face the risk of extinction. Temperature changes can
              also affect aquatic and marine ecosystems, leading to unexpected
              shifts in species distribution and migration.
            </p>
            {/* <p>
              Peningkatan suhu global dapat menyebabkan perubahan iklim lokal,
              termasuk kenaikan suhu rata-rata di berbagai wilayah. Spesies
              tumbuhan dan hewan yang tidak dapat beradaptasi dengan perubahan
              suhu dapat menghadapi risiko kepunahan. Perubahan suhu juga dapat
              mempengaruhi ekosistem air dan laut, mengarah pada perubahan
              distribusi spesies dan migrasi yang tidak terduga.
            </p> */}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
