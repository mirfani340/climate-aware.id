import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { TfiMenuAlt } from "react-icons/tfi";

import Image from "next/image";
import causes from "../../../public/images/causes.webp";
import greenhouse from "../../../public/images/greenhouse.webp";
import fosil from "../../../public/images/fosil.webp";
import sealevel from "../../../public/images/sealevel.webp";
import esnasa from "../../..//public/images/esnasa.webp";
import hutan from "../../../public/images/hutan1.webp";
import worldpopulation from "../../../public/images/world-population.webp";

export const metadata = {
  title: "Educations - Causes",
};

const page = () => {
  return (
    <MainLayout>
      <section className="text-white relative">
        <Image
          src={causes}
          alt="causes"
          className="h-420px w-full object-cover"
        />
        <div
          className="absolute text-center w-full h-full flex flex-col justify-center"
          id="textOverlay"
        >
          <h2 className="font-bold text-2xl py-1">CAUSES</h2>
          <p className="font-bold text-4xl">
            Why is Climate Change <br /> Happening?
          </p>
          <p className="text-base md:text-xl py-1">
            Climate change certainly does not come without cause, <br /> but
            rather as a result of a certain event.
          </p>
          {/* <p className="text-base md:text-xl py-1">
            Perubahan iklim tentu tidak datang tanpa sebab <br /> melainkan
            akibat dari suatu kejadian.
          </p> */}
        </div>
      </section>
      <section className="p-6 grid sm:grid-cols-3 md:grid-cols-4">
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
        <aside className="hidden sm:block table-of-contents sticky top-0 pt-100px bg-white max-w-fit p-4 pl-0 md:pl-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <TfiMenuAlt /> <h1>Contents</h1>
          </div>
          <ul className="p-2 flex flex-col gap-3">
            <li>
              <a href="#section-1">1. Green House Gas Emissions</a>
            </li>
            <li>
              <a href="#section-2">2. The Burning of Fossil Fuels</a>
            </li>
            <li>
              <a href="#section-3">3. Ocean Warming and Ice Melting</a>
            </li>
            <li>
              <a href="#section-4">4. Deforestation and Land-use Change</a>
            </li>
            <li>
              <a href="#section-5">5. The Increase in Population and Economic Growth</a>
            </li>
          </ul>
        </aside>
        <div className="col-span-2 max-w-screen-sm m-auto text-lg">
          <p className="my-2">
            Climate change is caused by various factors, both natural and
            human-made. However, currently, much evidence indicates that the
            ongoing climate change is largely attributed to human activities.
          </p>
          {/* <p className="my-2">
            Perubahan iklim disebabkan oleh berbagai faktor, baik alami maupun
            buatan manusia. Namun, saat ini, banyak bukti menunjukkan bahwa
            perubahan iklim yang sedang terjadi sebagian besar disebabkan oleh
            aktivitas manusia.
          </p> */}
          <p className="my-2">Here are some main causes of climate change:</p>
          {/* <p className="my-2">
            Berikut adalah beberapa penyebab utama perubahan iklim:
          </p> */}
          <div id="section-1">
            <h2 className="font-bold mb-2">1. Greenhouse Gas Emissions</h2>
            {/* <h2 className="font-bold mb-2">1. Emisi Gas Rumah Kaca</h2> */}
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image
                src={greenhouse}
                alt="green house effect"
                className="w-300px"
              />
              <span style={{ fontSize: "12px" }}>Photo: NASA/JPL-Caltech</span>
              {/* <span style={{ fontSize: "12px" }}>Foto: NASA/JPL-Caltech</span> */}
            </div>
            <p className="pb-2">
              The increase in greenhouse gas emissions is a primary cause of
              climate change. These gases, such as carbon dioxide (CO2), methane
              (CH4), and nitrous oxide (N2O), enhance the greenhouse effect,
              leading to an increased retention of heat in the atmosphere. Human
              activities, including the burning of fossil fuels, deforestation,
              and industrial production, contribute significantly to greenhouse
              gas emissions.
            </p>
            {/* <p className="pb-2">
              Peningkatan emisi gas rumah kaca adalah penyebab utama perubahan
              iklim. Gas-gas ini, seperti karbon dioksida (CO2), metana (CH4),
              dan nitrous oksida (N2O), memperkuat efek rumah kaca, yang
              menyebabkan peningkatan retensi panas di atmosfer. Aktivitas
              manusia, termasuk pembakaran bahan bakar fosil, deforestasi, dan
              produksi industri, menyumbang secara signifikan pada emisi gas
              rumah kaca.
            </p> */}
            <p className="pb-2">
              Gases in the atmosphere, such as carbon dioxide (CO2), methane
              (CH4), and water vapor, can absorb some of the infrared radiation
              emitted by the Earth. This results in the trapping of heat in the
              atmosphere, creating warmer conditions than if these gases were
              not present. The greenhouse effect can be illustrated with the
              analogy of a greenhouse, where incoming radiation is more easily
              allowed in than outgoing radiation.
            </p>
            {/* <p className="pb-2">
              Gas-gas di atmosfer, seperti karbon dioksida (CO2), metana (CH4),
              dan uap air, dapat menyerap sebagian radiasi inframerah yang
              dipancarkan oleh Bumi. Ini mengakibatkan penahanan panas di dalam
              atmosfer, menciptakan kondisi yang lebih hangat daripada jika
              tidak ada gas-gas ini. Analogi efek rumah kaca dapat
              diilustrasikan dengan analogi ruang hijau, di mana radiasi masuk
              lebih mudah daripada radiasi keluar.
            </p> */}
            <p className="pb-2">
              Human activities, such as the burning of fossil fuels,
              deforestation, and industrial activities, can increase the
              concentration of greenhouse gases in the atmosphere. This
              heightened concentration can enhance the greenhouse effect and
              lead to a global temperature increase, known as global warming or
              climate change.
            </p>
            {/* <p className="pb-2">
              Aktivitas manusia, seperti pembakaran bahan bakar fosil,
              deforestasi, dan kegiatan industri, dapat meningkatkan konsentrasi
              gas-gas rumah kaca di atmosfer. Peningkatan konsentrasi ini dapat
              memperkuat efek rumah kaca dan menyebabkan peningkatan suhu
              global, yang dikenal sebagai pemanasan global atau perubahan
              iklim.
            </p> */}
            <p>
              It is important to note that the greenhouse effect itself is a
              natural and necessary phenomenon to maintain Earth's temperature
              at a level conducive to life. However, the increase in greenhouse
              gas concentrations due to human activities can lead to unwanted
              climate change and pose a threat to Earth's ecosystems. Efforts to
              reduce greenhouse gas emissions have been a primary focus in
              addressing global climate change.
            </p>
            {/* <p>
              Penting untuk mencatat bahwa efek rumah kaca sendiri adalah
              fenomena alam yang alami dan diperlukan untuk menjaga suhu Bumi
              pada tingkat yang mendukung kehidupan. Namun, peningkatan
              konsentrasi gas-gas rumah kaca akibat aktivitas manusia dapat
              menyebabkan perubahan iklim yang tidak diinginkan dan dapat
              membahayakan ekosistem Bumi. Upaya untuk mengurangi emisi gas-gas
              rumah kaca telah menjadi fokus utama dalam rangka menangani
              perubahan iklim global.
            </p> */}
          </div>
          <div id="section-2">
            <h2 className="font-bold my-2">2. The Burning of Fossil Fuels</h2>
            {/* <h2 className="font-bold my-2">2. Pembakaran Bahan Bakar Fosil</h2> */}
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image src={fosil} alt="fosil" className="px-4" />
              <span style={{ fontSize: "12px" }}>Photo: DW (News)</span>
              {/* <span style={{ fontSize: "12px" }}>Foto: DW (News)</span> */}
            </div>
            <p className="pb-2">
              The burning of fossil fuels is a process in which fossil fuels
              such as coal, oil, and natural gas are combusted to generate
              energy. This process commonly occurs in power plants, motor
              vehicles, and industrial facilities.
            </p>
            {/* <p className="pb-2">
              Pembakaran bahan bakar fosil adalah proses di mana bahan bakar
              fosil, seperti batu bara, minyak bumi, dan gas alam, dibakar untuk
              menghasilkan energi. Proses ini umumnya terjadi dalam pembangkit
              listrik, kendaraan bermotor, dan industri.
            </p> */}
            <p className="pb-2">
              While the combustion of fossil fuels provides the necessary energy
              to meet human needs, this process also results in the emission of
              greenhouse gases and other air pollutants, which have negative
              impacts on the environment and human health.
            </p>
            {/* <p className="pb-2">
              Meskipun pembakaran bahan bakar fosil memberikan energi yang
              diperlukan untuk memenuhi kebutuhan manusia, proses ini juga
              menyebabkan emisi gas-gas rumah kaca dan polutan udara lainnya,
              yang memiliki dampak negatif terhadap lingkungan dan kesehatan
              manusia.
            </p> */}
            <p>
              In an effort to address the negative impacts of fossil fuel
              combustion, many countries and organizations are actively seeking
              cleaner and more sustainable energy alternatives, such as
              renewable energy (solar, wind, hydro, etc.) and safe nuclear
              energy technologies.
            </p>
            {/* <p>
              Dalam upaya untuk mengatasi dampak negatif pembakaran bahan bakar
              fosil, banyak negara dan organisasi sedang mencari alternatif
              energi yang lebih bersih dan berkelanjutan, seperti energi
              terbarukan (surya, angin, hidro, dan lain-lain) serta teknologi
              energi nuklir yang aman.
            </p> */}
          </div>
          <div id="section-3">
            <h2 className="font-bold my-2">3. Ocean Warming and Ice Melting</h2>
            {/* <h2 className="font-bold my-2">3. Pemanasan Laut dan Pelehan Es</h2> */}
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
              <span style={{ fontSize: "12px" }}>Photo: Kompas</span>
              {/* <span style={{ fontSize: "12px" }}>Foto: Kompas</span> */}
              <span style={{ fontSize: "10px" }}>
                SATELLITE IMAGE OF ICE LAYERS ON EAGLE ISLAND, ANTARCTICA,
                THROUGHOUT FEBRUARY 2020. JOSHUA STEVENS/LANDSAT/USGS
              </span>
              {/* <span style={{ fontSize: "10px" }}>
                GAMBAR SATELIT LAPISAN ES DI PULAU EAGLE ANTARTIKA SEPANJANG
                FEBRUARI 2020. JOSHUA STEVENS/LANDSAT/USGS
              </span> */}
            </div>
            <p className="pb-2">
              The rise in sea level refers to the phenomenon in which the sea
              surface gradually increases. This process is closely related to
              global climate change and has significant impacts, especially in
              coastal regions.
            </p>
            {/* <p className="pb-2">
              Kenaikan permukaan air laut merujuk pada fenomena di mana
              permukaan laut secara bertahap meningkat. Proses ini terkait erat
              dengan perubahan iklim global dan memiliki dampak signifikan
              terutama pada wilayah pesisir.
            </p> */}
            <p className="pb-2">
              Some key factors causing the rise in sea level involve climate
              change and ocean dynamics.
            </p>
            {/* <p className="pb-2">
              Beberapa faktor utama yang menyebabkan kenaikan permukaan air laut
              melibatkan perubahan iklim dan dinamika laut.
            </p> */}
            <p className="pb-2">
              Global warming leads to the melting of ice in polar regions and
              glaciers worldwide. The water released from the melting ice
              contributes to the increase in the volume of seawater.
            </p>
            {/* <p className="pb-2">
              Pemanasan global menyebabkan pencairan es di kutub dan gletser di
              seluruh dunia. Air yang dilepaskan dari es yang mencair menyumbang
              pada kenaikan volume air laut.
            </p> */}
            <p className="pb-2">
              Global warming also causes thermal expansion of seawater. Warmer
              water has a larger volume, leading to the rise in sea level.
            </p>
            {/* <p className="pb-2">
              Pemanasan global juga menyebabkan ekspansi termal air laut. Air
              yang menjadi lebih hangat memiliki volume yang lebih besar, dan
              ini menyebabkan kenaikan permukaan air laut.
            </p> */}
            <p className="pb-2">
              The ice sheets in Greenland and Antarctica experience significant
              swelling or melting. Swelling can add to the volume of seawater,
              while melting can release water into the sea.
            </p>
            {/* <p className="pb-2">
              Lapisan es di Greenland dan Antartika mengalami pembengkakan atau
              pencairan yang signifikan. Pembengkakan dapat menambahkan volume
              air laut, sementara pencairan dapat melepaskan air ke laut.
            </p> */}
            <p>
              Changes in ocean currents and circulation can affect the
              distribution of water globally, causing sea level rise in some
              regions and a decrease in others.
            </p>
            {/* <p>
              Perubahan dalam arus laut dan sirkulasi dapat mempengaruhi
              distribusi air di seluruh dunia, menyebabkan kenaikan permukaan
              air laut di beberapa wilayah dan penurunan di tempat lain.
            </p> */}
          </div>
          <div id="section-4">
            <h2 className="font-bold my-2">
              4. Deforestation and Land-use Change
            </h2>
            {/* <h2 className="font-bold my-2">
              4. Deforestasi dan Perubahan Penggunaan Lahan
            </h2> */}
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image src={hutan} alt="hutan" className="object-cover" />
              <span style={{ fontSize: "12px" }}>
                Field clearing around Lake Sentarum, West Kalimantan. Currently,
                due to socio-economic pressures, there is a shift in traditional
                land-use patterns.. Tim Cronin/CIFOR
              </span>
              {/* <span style={{ fontSize: "12px" }}>
                Pembersihan ladang di Danau Sentarum, Kalimantan Barat. Saat ini
                akibat tekanan sosial ekonomi terjadi perubahan pola penggunaan
                lahan tradisional. Tim Cronin/CIFOR
              </span> */}
            </div>
            <p className="pb-2">
              Deforestation is a human activity involving the logging and
              removal of all or part of a forest. This practice can have serious
              impacts on the environment and various aspects of life on this
              planet.
            </p>
            {/* <p className="pb-2">
              Penggundulan hutan adalah tindakan manusia yang melibatkan
              penebangan dan penghilangan sebagian atau seluruh hutan. Praktik
              ini dapat memiliki dampak serius terhadap lingkungan dan berbagai
              aspek kehidupan di planet ini.
            </p> */}
            <p className="pb-2">
              Many forests worldwide are cleared to make space for agriculture
              and plantations. This practice often involves burning methods,
              which can harm the soil and result in greenhouse gas emissions.
            </p>
            {/* <p className="pb-2">
              Banyak hutan di dunia ditebang untuk memberikan ruang bagi
              pertanian dan perkebunan. Praktik ini seringkali melibatkan metode
              pembakaran, yang dapat merusak tanah dan menghasilkan emisi gas
              rumah kaca.
            </p> */}
            <p className="pb-2">
              Logging for timber and other wood products is a primary cause of
              deforestation. This occurs to meet demands from both local and
              international markets.
            </p>
            {/* <p className="pb-2">
              Penebangan hutan untuk produksi kayu dan produk kayu lainnya
              merupakan penyebab utama penggundulan hutan. Ini terjadi baik
              untuk memenuhi permintaan pasar lokal maupun internasional.
            </p> */}
            <p className="pb-2">
              Infrastructure development such as roads, dams, and settlements
              often involves deforestation. This can damage ecosystems and lead
              to habitat loss. Forest fires, whether natural or caused by human
              activities like land burning, can result in extensive
              deforestation.
            </p>
            {/* <p className="pb-2">
              Pengembangan infrastruktur seperti jalan, bendungan, dan pemukiman
              seringkali melibatkan penebangan hutan. Ini dapat merusak
              ekosistem dan menyebabkan hilangnya habitat. Kebakaran hutan, baik
              yang alami maupun disebabkan oleh aktivitas manusia seperti
              pembakaran lahan, dapat menyebabkan penggundulan hutan yang luas.
            </p> */}
            <p>
              Large-scale deforestation releases stored carbon from plants and
              soil into the atmosphere. Land-use changes, such as converting
              forests into agricultural or urban areas, can also lead to the
              release of greenhouse gases and alter the Earth's surface
              characteristics.
            </p>
            {/* <p>
              Penggundulan hutan secara besar-besaran (deforestasi) menyebabkan
              pelepasan karbon yang disimpan dalam tanaman dan tanah ke
              atmosfer. Perubahan penggunaan lahan, seperti konversi hutan
              menjadi lahan pertanian atau perkotaan, juga dapat menyebabkan
              pelepasan gas rumah kaca dan mengubah karakteristik permukaan
              bumi.
            </p> */}
          </div>
          <div id="section-5">
            <h2 className="font-bold my-2">
              5. The Increase In Population and Economic Growth
            </h2>
            {/* <h2 className="font-bold my-2">
              5. Pertambahan Populasi dan Pertumbuhan Ekonomi
            </h2> */}
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image
                src={worldpopulation}
                alt="hutan"
                className="object-cover"
              />
              <span className="text-xs">Source: Our World in Data</span>
              {/* <span className="text-xs">Sumber: Our World in Data</span> */}
            </div>
            <p className="pb-2">
              The increase in human population and economic growth can escalate
              the demand for natural resources, energy, and food production,
              which may contribute to greenhouse gas emissions.
            </p>
            {/* <p className="pb-2">
              Pertambahan populasi manusia dan pertumbuhan ekonomi dapat
              meningkatkan permintaan akan sumber daya alam, energi, dan
              produksi makanan, yang dapat berkontribusi pada emisi gas rumah
              kaca.
            </p> */}
            <p className="pb-2">
              The increase in population leads to an increased demand for
              resources such as food, water, energy, and land. If this demand is
              not balanced with sustainable efforts, environmental degradation
              and resource shortages can occur.
            </p>
            {/* <p className="pb-2">
              Pertambahan populasi menyebabkan peningkatan permintaan akan
              sumber daya seperti makanan, air, energi, dan lahan. Jika
              permintaan ini tidak diimbangi dengan upaya berkelanjutan, dapat
              terjadi degradasi lingkungan dan kekurangan sumber daya.
            </p> */}
            <p className="pb-2">
              While economic growth can increase energy and resource
              consumption, the sustainable challenge is to reduce environmental
              impact and transition to a more sustainable economic model.
            </p>
            {/* <p className="pb-2">
              Sementara pertumbuhan ekonomi dapat meningkatkan konsumsi energi
              dan sumber daya, tantangan berkelanjutan adalah mengurangi dampak
              lingkungan dan beralih ke model ekonomi yang lebih berkelanjutan.
            </p> */}
            <p className="pb-2">
              Unsustainable economic growth can lead to an increase in
              greenhouse gas emissions, contributing to global climate change.
            </p>
            {/* <p className="pb-2">
              Pertumbuhan ekonomi yang tidak berkelanjutan dapat menyebabkan
              peningkatan emisi gas rumah kaca, menyumbang pada perubahan iklim
              global.
            </p> */}
            <p>
              The importance of managing population growth and economic growth
              wisely and sustainably is becoming increasingly urgent to maintain
              a balance between human needs and the health of the planet.
              Efforts to achieve sustainable development involve population
              planning, environmental policies, and economic strategies that
              focus on sustainability.
            </p>
            {/* <p>
              Pentingnya mengelola pertambahan populasi dan pertumbuhan ekonomi
              dengan bijaksana dan berkelanjutan menjadi semakin mendesak untuk
              menjaga keseimbangan antara kebutuhan manusia dan kesehatan
              planet. Upaya-upaya untuk mencapai pembangunan berkelanjutan
              melibatkan perencanaan populasi, kebijakan lingkungan, dan
              strategi ekonomi yang berfokus pada keberlanjutan.
            </p> */}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
