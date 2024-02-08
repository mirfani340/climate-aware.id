import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { TfiMenuAlt } from "react-icons/tfi";

import Image from "next/image";
import solutions from "../../../public/images/solutions.webp";
import energibersih from "../../../public/images/energi-bersih.webp";
import reforestation from "../../../public/images/reforestation.webp";
import agriculture from "../../../public/images/agriculture.webp";
import circularEconomy from "../../../public/images/circular-economy.webp";
import ccs from "../../../public/images/carbon-capture-storage.webp";
import publicTrans from "../../../public/images/public-transportation.webp";
import activeTrans from "../../../public/images/active-transportation.webp";
import sustainableCity from "../../../public/images/sustainable-city.webp";
import climateEducation from "../../../public/images/climate-education.webp";
import climateActionSummit from "../../../public/images/climate-action-summit.webp";

export const metadata = {
  title: "Educations - Solutions",
};

const page = () => {
  return (
    <MainLayout>
      <section className="text-white relative">
        <Image
          src={solutions}
          alt="solutions"
          className="h-420px w-full object-cover"
        />
        <div
          className="absolute text-center w-full h-full flex flex-col justify-center"
          id="textOverlay"
        >
          <h2 className="font-bold text-2xl py-1">SOLUTIONS</h2>
          <p className="font-bold text-4xl">
            What is Being Done to <br /> Solve Climate Change?
          </p>
          <p className="text-base md:text-xl py-1">
            Taking the right steps to mitigate and <br /> address the impacts of
            climate change is crucial.
          </p>
          {/* <p className="text-base md:text-xl py-1">
            Diperlukan langkah yang tepat untuk menanggulangi dan menangani{" "}
            <br /> dampak dari perubahan iklim
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
              <a href="#section-1">1. Shifting to Clean Energy</a>
            </li>
            <li>
              <a href="#section-2">2. Reforestation and Forest Conservation</a>
            </li>
            <li>
              <a href="#section-3">3. Sustainable Agriculture</a>
            </li>
            <li>
              <a href="#section-4">4. Circular Economy</a>
            </li>
            <li>
              <a href="#section-5">5. Carbon Capture and Storage (CCS)</a>
            </li>
            <li>
              <a href="#section-6">6. Public Transportation and Active Transportation</a>
            </li>
            <li>
              <a href="#section-7">7. Climate-friendly Urban Planning</a>
            </li>
            <li>
              <a href="#section-8">8. Education and Advocacy</a>
            </li>
            <li>
              <a href="#section-9">9. International Cooperation</a>
            </li>
            <li>
              <a href="#section-10">10. Innovation and Research</a>
            </li>
            <li>
              <a href="#section-11">11. Policy and Regulation</a>
            </li>
            <li>
              <a href="#section-12">12. Individual Action</a>
            </li>
          </ul>
        </aside>
        <div className="col-span-2 max-w-screen-sm m-auto text-lg">
          <p className="my-2">
            Addressing climate change requires collective efforts from the
            entire society, governments, businesses, and organizations
            worldwide.
          </p>
          {/* <p className="my-2">
            Menanggulangi perubahan iklim memerlukan upaya bersama dari seluruh
            masyarakat, pemerintah, bisnis, dan organisasi di seluruh dunia.
          </p> */}
          <p className="my-2">
            Here are some solutions and actions that can be taken to reduce the
            impacts of climate change:
          </p>
          {/* <p className="my-2">
            Berikut adalah beberapa solusi dan tindakan yang dapat diambil untuk
            mengurangi dampak perubahan iklim:
          </p> */}
          <div id="section-1">
            <h2 className="font-bold mb-2">1. Shifting to Clean Energy</h2>
            {/* <h2 className="font-bold mb-2">1. Pergeseran ke Energi Bersih</h2> */}
            <div className="px-4 py-2 text-center flex flex-col gap-2">
              <Image src={energibersih} alt="energi bersih" />
              <span style={{ fontSize: "12px" }}>Photo: climate.nasa.gov</span>
              {/* <span style={{ fontSize: "12px" }}>Foto: climate.nasa.gov</span> */}
            </div>
            <p className="pb-2">
              Clean energy refers to energy sources and technologies that have
              lower environmental impacts or even do not pollute the environment
              compared to conventional energy sources widely used. Clean energy
              focuses on reducing greenhouse gas emissions, air pollution, and
              other negative impacts on the environment.
            </p>
            {/* <p className="pb-2">
              Energi bersih adalah istilah yang merujuk pada sumber energi dan
              teknologi yang memiliki dampak lingkungan yang lebih rendah atau
              bahkan tidak mencemari lingkungan dibandingkan dengan sumber
              energi konvensional yang banyak digunakan. Energi bersih berfokus
              pada pengurangan emisi gas rumah kaca, polusi udara, dan dampak
              negatif lainnya terhadap lingkungan.
            </p> */}
            <div className="pb-2">
              <p className="font-semibold">
                Renewable Energy includes: <br />
              </p>
              {/* <p className="font-semibold">
                Energi Terbarukan diantaranya: <br />
              </p> */}
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">Solar Energy:</p> Solar power
                  plants use sunlight to generate electricity.Solar power plants
                  use sunlight to generate electricity. <br />
                  {/* <p className="font-semibold">Energi Matahari:</p> Pembangkit
                  listrik tenaga surya menggunakan sinar matahari untuk
                  menghasilkan listrik. <br /> */}
                </li>
                <li>
                  <p className="font-semibold">Wind Energy:</p> Wind turbines
                  convert the kinetic energy of the wind into electricity.{" "}
                  <br />
                  {/* <p className="font-semibold">Energi Angin: </p> Turbin angin
                  mengubah energi kinetik angin menjadi energi listrik. <br /> */}
                </li>
                <li>
                  <p className="font-semibold">Hydro Energy:</p> Hydropower
                  plants convert the energy of flowing water into electricity.{" "}
                  <br />
                  {/* <p className="font-semibold">Energi Hidro:</p> Pembangkit
                  listrik tenaga air mengonversi energi air mengalir menjadi
                  listrik. <br /> */}
                </li>
                <li>
                  <p className="font-semibold">Biomass Energy:</p> Biomass, such
                  as organic waste and wood, is used to generate thermal energy
                  or electricity. Biomass, such as organic waste and wood, is
                  used to generate thermal energy or electricity.
                  <br />
                  {/* <p className="font-semibold">Energi Biomassa:</p> Biomassa,
                  seperti limbah organik dan kayu, digunakan untuk menghasilkan
                  energi termal atau listrik.
                  <br /> */}
                </li>
                <li>
                  <p className="font-semibold">Geothermal Energy:</p> Heat from
                  the Earth is used to produce steam that drives electric
                  turbines.
                  {/* <p className="font-semibold">Energi Geotermal:</p> Panas bumi
                  digunakan untuk menghasilkan uap yang digunakan untuk
                  menggerakkan turbin listrik. */}
                </li>
              </ul>
            </div>
            <div className="pb-2">
              <p className="font-semibold">
                Nuclear Energy: <br />
              </p>
              {/* <p className="font-semibold">
                Energi Nuklir: <br />
              </p> */}
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">Nuclear Reactors:</p> Despite
                  controversy, nuclear power plants use nuclear reactions to
                  generate energy without producing greenhouse gas emissions
                  during operation.
                  {/* <p className="font-semibold">Reaktor Nuklir:</p> Meskipun
                  kontroversial, pembangkit listrik tenaga nuklir menggunakan
                  reaksi nuklir untuk menghasilkan energi tanpa menghasilkan
                  emisi gas rumah kaca selama operasionalnya. */}
                </li>
              </ul>
            </div>
            <div className="pb-2">
              <p className="font-semibold">
                Passive Energy and Energy Efficiency: <br />
              </p>
              {/* <p className="font-semibold">
                Energi Pasif dan Efisiensi Energi: <br />
              </p> */}
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">
                    Energy-Efficient Building Design:
                  </p>
                  {/* <p className="font-semibold">
                    Desain Bangunan Efisien Energi:
                  </p> */}
                  Buildings designed to minimize energy consumption and maximize
                  the use of natural resources.
                  {/* Bangunan yang dirancang untuk meminimalkan konsumsi energi dan
                  memaksimalkan penggunaan sumber daya alam. */}
                </li>
                <li>
                  <p className="font-semibold">
                    Energy-Efficient Household Appliances:
                  </p>
                  Electronic and household appliances designed to reduce energy
                  consumption.
                  {/* <p className="font-semibold">
                    Peralatan Rumah Tangga Efisien Energi:
                  </p>
                  Peralatan elektronik dan rumah tangga yang dirancang untuk
                  mengurangi konsumsi energi. */}
                </li>
              </ul>
            </div>
            <p>
              However, it is important to note that some clean energy
              technologies also have challenges and environmental impacts that
              need to be managed, such as the environmental impact of the
              production and disposal of specific renewable technology
              materials. Therefore, clean energy sources must be developed and
              implemented considering sustainable and environmental aspects.
            </p>
            {/* <p>
              Namun, penting untuk dicatat bahwa beberapa teknologi energi
              bersih juga memiliki tantangan dan dampak lingkungan yang perlu
              dikelola, seperti dampak lingkungan produksi dan pembuangan
              material teknologi terbarukan tertentu. Oleh karena itu, sumber
              energi bersih harus dikembangkan dan diimplementasikan dengan
              mempertimbangkan aspek-aspek berkelanjutan dan lingkungan.
            </p> */}
          </div>
          <div id="section-2">
            <h2 className="font-bold my-2">
              2. Reforestation and Forest Conservation
            </h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image
                src={reforestation}
                alt="forest"
                className="object-cover"
              />
              <span style={{ fontSize: "12px" }}>Source: Pexels</span>
            </div>
            <p className="pb-2">
              Reforestation and forest conservation play crucial roles in
              mitigating climate change, preserving biodiversity, and ensuring
              the overall health of ecosystems. Here are key aspects and
              strategies related to reforestation and forest conservation:
            </p>
            <div className="pb-2">
              <p className="font-semibold">
                Reforestation: <br />
              </p>
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">Tree Planting Programs:</p>{" "}
                  Initiate large-scale tree planting programs to restore
                  deforested or degraded areas. Prioritize native tree species
                  that are well-suited to the local ecosystem. <br />
                </li>
                <li>
                  <p className="font-semibold">Agroforestry:</p> Promote
                  agroforestry practices, integrating trees into agricultural
                  landscapes for sustainable land use. Combining crops with
                  trees helps improve soil fertility, retain water, and
                  sequester carbon. <br />
                </li>
                <li>
                  <p className="font-semibold">Community Engagement:</p> Involve
                  local communities in reforestation efforts, considering their
                  knowledge of the land and fostering a sense of ownership.
                  Provide incentives for communities to protect and care for
                  newly planted trees. <br />
                </li>
                <li>
                  <p className="font-semibold">Urban Reforestation:</p>{" "}
                  Implement tree planting initiatives in urban areas to enhance
                  air quality, provide shade, and reduce the urban heat island
                  effect.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Technology and Monitoring:</p>{" "}
                  Use technology, such as satellite imagery and drones, to
                  monitor reforestation efforts and assess the health of newly
                  planted trees. Implement data-driven approaches to optimize
                  planting strategies.
                  <br />
                </li>
              </ul>
              <p className="font-semibold pt-2">
                Forest Conservation: <br />
              </p>
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">Protected Areas and Reserves:</p>{" "}
                  Establish and enforce protected areas and reserves to
                  safeguard critical ecosystems and prevent deforestation.
                  Include buffer zones to minimize human impact around protected
                  areas. <br />
                </li>
                <li>
                  <p className="font-semibold">Anti-Deforestation Policies:</p>{" "}
                  Enact and enforce policies that penalize illegal logging and
                  land conversion. Provide incentives for sustainable forestry
                  practices, including certification programs. <br />
                </li>
                <li>
                  <p className="font-semibold">
                    Forest Fire Prevention and Management:
                  </p>{" "}
                  Implement measures to prevent and manage forest fires, which
                  can contribute significantly to deforestation. Use controlled
                  burns and early detection systems to reduce the impact of
                  wildfires. <br />
                </li>
                <li>
                  <p className="font-semibold">Corporate Responsibility:</p>{" "}
                  Encourage responsible sourcing of forest products by promoting
                  sustainable and certified wood products. Hold companies
                  accountable for their supply chains and ensure they adhere to
                  sustainable and ethical practices. <br />
                </li>
                <li>
                  <p className="font-semibold">Education and Awareness:</p>{" "}
                  Raise awareness about the importance of forests and the role
                  they play in climate regulation and biodiversity. Educate
                  communities on sustainable forest management practices.Raise
                  awareness about the importance of forests and the role they
                  play in climate regulation and biodiversity. Educate
                  communities on sustainable forest management practices. <br />
                </li>
              </ul>
            </div>
          </div>
          <div id="section-3">
            <h2 className="font-bold my-2">3. Sustainable Agriculture</h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image
                src={agriculture}
                alt="agriculture"
                className="object-cover"
              />
              <span style={{ fontSize: "12px" }}>
                The Importance of Sustainable Agriculture. (Plug & Play Tech)
              </span>
            </div>
            <p className="pb-2">
              Promote sustainable agricultural practices that reduce emissions,
              conserve soil health, and enhance carbon sequestration. Encourage
              the use of agroecological methods and precision farming.
            </p>
            <p className="pb-2">
              Sustainable agriculture aims to meet current food needs without
              compromising the ability of future generations to meet their own
              needs. It involves practices that are environmentally sound,
              economically viable, and socially responsible. Here are key
              principles and strategies for sustainable agriculture:
            </p>
            <div className="pb-2">
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">Crop Diversity:</p> Promote the
                  cultivation of a diverse range of crops to enhance resilience
                  to pests, diseases, and environmental changes. Use crop
                  rotation and diversification to improve soil health and
                  fertility. <br />
                </li>
                <li>
                  <p className="font-semibold">Agroecology:</p> Adopt
                  agroecological principles that mimic natural ecosystems,
                  emphasizing biodiversity, soil health, and integrated pest
                  management. Use companion planting and polyculture to create
                  balanced, self-sustaining systems. Adopt agroecological
                  principles that mimic natural ecosystems, emphasizing
                  biodiversity, soil health, and integrated pest management. Use
                  companion planting and polyculture to create balanced,
                  self-sustaining systems. <br />
                </li>
                <li>
                  <p className="font-semibold">Soil Health Management:</p>{" "}
                  Implement conservation tillage and no-till farming to reduce
                  soil erosion and improve water retention. Apply organic
                  matter, cover crops, and crop residues to enhance soil
                  fertility and structure. <br />
                </li>
                <li>
                  <p className="font-semibold">Water Conservation:</p> Implement
                  efficient irrigation practices, such as drip irrigation and
                  rainwater harvesting, to minimize water use. Use technologies
                  like soil moisture sensors to optimize water application.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Organic Farming:</p> Embrace
                  organic farming practices that avoid synthetic pesticides and
                  fertilizers, promoting natural pest control and nutrient
                  cycling. Use compost and organic amendments to enhance soil
                  fertility.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Reduced Food Waste:</p> Minimize
                  post-harvest losses through better storage, transportation,
                  and processing techniques. Educate farmers and consumers about
                  the impact of food waste on sustainability.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Local and Direct Markets:</p>{" "}
                  Support local and direct markets, such as farmers' markets and
                  community-supported agriculture (CSA) programs. Shorten supply
                  chains to reduce the environmental impact of transportation.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Education and Training:</p>{" "}
                  Provide farmers with training and information on sustainable
                  agricultural practices. Raise awareness among consumers about
                  the importance of supporting sustainable agriculture.
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div id="section-4">
            <h2 className="font-bold my-2">4. Circular Economy</h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image
                src={circularEconomy}
                alt="circular economy"
                className="object-cover"
              />
              <span style={{ fontSize: "12px" }}>
                Circular Economy. (European Commission)
              </span>
            </div>
            <p className="pb-2">
              The circular economy is an economic model that seeks to minimize
              waste and make the most of resources by promoting sustainability,
              recycling, and reuse. In a circular economy, products, materials,
              and resources are kept in use for as long as possible, and at the
              end of their lifecycle, they are recovered, regenerated, and
              reintegrated into the production system. Here are key principles
              and strategies associated with the circular economy:
            </p>
            <div className="pb-2">
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">Design for Longevity:</p> Design
                  products with durability and longevity in mind to extend their
                  lifecycle. Consider modular designs that allow for easy
                  repair, upgrade, and disassembly.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Reuse and Refurbishment:</p>{" "}
                  Promote the reuse of products and components to extend their
                  life. Support refurbishment and remanufacturing practices to
                  bring used products back to a like-new condition.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Recycling:</p> Establish
                  efficient recycling systems to recover valuable materials from
                  products at the end of their life. Encourage the use of
                  recycled materials in manufacturing processes.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Waste Reduction:</p> Minimize
                  waste generation by designing products with minimal packaging.
                  Encourage businesses and consumers to reduce, refuse, and
                  rethink consumption patterns.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Resource Efficiency:</p> Optimize
                  the use of resources in production processes to reduce waste.
                  Implement resource-efficient technologies and practices to
                  maximize the value derived from raw materials.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Product as a Service (PaaS):</p>{" "}
                  Explore business models where consumers pay for the service or
                  function of a product rather than owning it outright.
                  Manufacturers retain ownership and responsibility for product
                  maintenance and recycling.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Digital Technologies:</p>{" "}
                  Leverage digital technologies, such as the Internet of Things
                  (IoT), to enable better tracking, monitoring, and management
                  of resources throughout their lifecycle. Use data analytics to
                  optimize resource use and product performance.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Educational Initiatives:</p>{" "}
                  Raise awareness among businesses and consumers about the
                  principles and benefits of the circular economy. Educate
                  people on how to participate in circular practices.
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div id="section-5">
            <h2 className="font-bold my-2">
              5. Carbon Capture and Storage (CCS)
            </h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image
                src={ccs}
                alt="carbon capture storage"
                className="object-cover"
              />
            </div>
            <p className="pb-2">
              Carbon Capture and Storage (CCS) is a technology designed to
              reduce greenhouse gas emissions, particularly carbon dioxide
              (CO2), from industrial processes and power generation. It involves
              capturing CO2 emissions at the source, transporting it to a
              storage site, and securely storing it underground to prevent its
              release into the atmosphere. Here are the key components and
              considerations associated with CCS:
            </p>
            <div className="pb-2">
              <p className="font-semibold">
                Capture:
                <br />
              </p>
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">Post-Combustion Capture:</p>{" "}
                  Captures CO2 emissions after fossil fuels are burned to
                  generate electricity or industrial processes.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Pre-Combustion Capture:</p>{" "}
                  Separates CO2 before combustion during the conversion of
                  fossil fuels into gas.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Oxy-Fuel Combustion:</p> Burns
                  fossil fuels in oxygen rather than air, resulting in a
                  concentrated CO2 stream that is easier to capture.
                  <br />
                </li>
              </ul>
              <p className="font-semibold pt-2">
                Transport:
                <br />
              </p>
              <ul className="ps-10 list-disc">
                <li>
                  <p>
                    CO2 is transported from the capture site to the storage site
                    using pipelines, ships, or trucks. Existing pipelines, if
                    available, can be repurposed for transporting CO2.
                  </p>
                </li>
              </ul>
              <p className="font-semibold pt-2">
                Storage:
                <br />
              </p>
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">Geological Storage:</p>
                  Injecting CO2 into geological formations such as depleted oil
                  and gas fields, deep saline formations, or unminable coal
                  seams.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Ocean Storage: </p>
                  Injecting CO2 into deep ocean sediments, a less common and
                  more controversial method.
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div id="section-6">
            <h2 className="font-bold my-2">
              6. Public Transportation and Active Transportation
            </h2>
            <div className="grid grid-cols-2 gap-2 px-4 py-2 text-center">
              <Image src={publicTrans} alt="transjakarta" />
              <Image
                src={activeTrans}
                alt="jalur sepeda"
                className="h-full object-cover"
              />
              <span style={{ fontSize: "12px" }}>
                Photo: ANTARA FOTO/Asprilla Dwi Adha/aww
              </span>
              <span style={{ fontSize: "12px" }}>
                Photo: Liputan6.com/Immanuel Antonius
              </span>
            </div>
            <p className="pb-2">
              Public transportation and active transportation play crucial roles
              in addressing climate change by promoting sustainable and
              low-carbon mobility options. These modes of transportation
              contribute to reducing greenhouse gas emissions, alleviating
              traffic congestion, and improving air quality. Here are the key
              aspects of how public and active transportation contribute to
              climate change solutions:
            </p>
            <div className="pb-2">
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">Reduced Emissions:</p> Public
                  transit options, such as buses, trains, and subways, typically
                  have lower per-passenger emissions compared to individual car
                  travel, especially if they use cleaner energy sources.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Efficient Land Use:</p> Public
                  transportation encourages compact and efficient land use,
                  reducing the need for sprawling urban development and limiting
                  emissions associated with transportation.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Equitable Access:</p> Public
                  transportation provides affordable and accessible
                  transportation options, promoting social equity and reducing
                  dependence on individual car ownership.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Improved Air Quality:</p> Active
                  transportation reduces reliance on motor vehicles, leading to
                  improved air quality and reduced pollution levels.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Health Benefits:</p> Walking and
                  cycling promote physical activity, contributing to public
                  health by reducing the incidence of sedentary-related
                  diseases.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Community Connectivity:</p>{" "}
                  Active transportation fosters community connectivity,
                  encouraging social interaction and a sense of belonging.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Reduced Noise Pollution:</p>{" "}
                  Unlike motorized transportation, walking and cycling produce
                  minimal noise pollution, contributing to a quieter and more
                  pleasant urban environment.
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div id="section-7">
            <h2 className="font-bold my-2">
              7. Climate-friendly Urban Planning
            </h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image
                src={sustainableCity}
                alt="sustainable city"
                className="object-cover"
              />
              <span style={{ fontSize: "12px" }}>
                https://www.unep.org/explore-topics/sustainable-development-goals/why-do-sustainable-development-goals-matter/goal-11
              </span>
            </div>
            <p className="pb-2">
              Climate-friendly urban planning involves designing and developing
              cities in a way that mitigates and adapts to climate change. It
              focuses on creating sustainable, resilient, and environmentally
              friendly urban environments. Here are key principles and features
              of climate-friendly urban planning:
            </p>
            <div className="pb-2">
              <ul className="ps-10 list-disc">
                <li>
                  <p className="font-semibold">
                    Compact and Mixed-Use Development:
                  </p>{" "}
                  Encourage compact urban development and mixed land-use zoning
                  to reduce the need for long-distance travel, lowering energy
                  consumption and emissions.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">
                    Green Spaces and Urban Greening:
                  </p>{" "}
                  Integrate green spaces, parks, and urban forests to enhance
                  biodiversity, provide recreational areas, and mitigate the
                  urban heat island effect. Implement green roofs and walls to
                  improve insulation and reduce energy consumption.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">Energy-Efficient Buildings:</p>{" "}
                  Promote energy-efficient building design and construction
                  standards to reduce the carbon footprint of urban
                  infrastructure. Encourage the use of renewable energy sources
                  for buildings, such as solar panels and wind turbines.
                  <br />
                </li>
                <li>
                  <p className="font-semibold">
                    Climate-Resilient Infrastructure:
                  </p>{" "}
                  Design infrastructure, including roads, bridges, and
                  utilities, to withstand the impacts of climate change, such as
                  extreme weather events and rising sea levels. Implement green
                  infrastructure, such as permeable pavements and sustainable
                  drainage systems, to manage water runoff.
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div id="section-8">
            <h2 className="font-bold my-2">8. Education and Advocacy</h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image
                src={climateEducation}
                alt="climate education"
                className="object-cover"
              />
              <span style={{ fontSize: "12px" }}>
                7 Resource to Teach Students About Climate Change.
                (teachingchannel.com)
              </span>
            </div>
            <p className="pb-2">
              Education and advocacy are critical components of addressing
              climate change. They play a vital role in raising awareness,
              fostering understanding, and mobilizing individuals, communities,
              and policymakers to take meaningful action. Here are key aspects
              of education and advocacy about climate change:
            </p>
            <div className="pb-2">
              <ul className="ps-10 list-disc">
                <li className="pb-2">
                  <p className="font-semibold">Formal Education:</p> Integrate
                  climate change education into school curricula at all levels
                  to ensure that students develop a comprehensive understanding
                  of the science, impacts, and solutions. Promote
                  interdisciplinary approaches that connect climate change to
                  subjects like science, geography, economics, and social
                  studies.
                  <br />
                </li>
                <li className="pb-2">
                  <p className="font-semibold">
                    Higher Education and Research:
                  </p>{" "}
                  Support climate change research and academic programs at
                  universities to advance scientific knowledge and provide a
                  foundation for evidence-based policymaking. Encourage
                  interdisciplinary research collaborations to address the
                  complex challenges of climate change.
                  <br />
                </li>
                <li className="pb-2">
                  <p className="font-semibold">Online Resources:</p> Create and
                  disseminate online resources, such as webinars, courses, and
                  informative websites, to reach a broader audience. Utilize
                  digital platforms to share up-to-date information and
                  resources.
                  <br />
                </li>
                <li className="pb-2">
                  <p className="font-semibold">Professional Training:</p>{" "}
                  Provide training programs for professionals in various
                  sectors, including business, agriculture, and urban planning,
                  to incorporate climate-friendly practices into their work.
                  <br />
                </li>
                <li className="pb-2">
                  <p className="font-semibold">Public Awareness Campaigns:</p>{" "}
                  Launch public awareness campaigns to inform the general
                  population about climate change, its causes, and potential
                  consequences. Use various media channels, including TV, radio,
                  social media, and print, to reach diverse audiences.
                  <br />
                </li>
                <li className="pb-2">
                  <p className="font-semibold">
                    Community Workshops and Events:
                  </p>{" "}
                  Conduct community workshops and events to engage people at the
                  local level. Offer practical information on sustainable
                  living, energy efficiency, and climate resilience.
                  <br />
                </li>
                <li className="pb-2">
                  <p className="font-semibold">
                    Partnerships with Educational Institutions:
                  </p>{" "}
                  Collaborate with schools, colleges, and universities to
                  facilitate guest lectures, workshops, and educational
                  initiatives on climate change. Foster partnerships between
                  educational institutions and environmental organizations.
                  <br />
                </li>
              </ul>
            </div>
          </div>
          <div id="section-9">
            <h2 className="font-bold my-2">9. International Cooperation</h2>
            <div className="px-4 py-2 text-center flex flex-col items-center gap-2">
              <Image
                src={climateActionSummit}
                alt="climate action summit 2019"
                className="object-cover"
              />
              <span style={{ fontSize: "12px" }}>
                Climate Action Summit 2019 (ilo.org)
              </span>
            </div>
            <p className="pb-2">
              Collaborate globally to address climate change, share technology
              and knowledge, and establish binding agreements.
            </p>
            <p className="pb-2">
              Support developing nations in adopting sustainable practices and
              adapting to climate impacts.
            </p>
          </div>
          <div id="section-10">
            <h2 className="font-bold my-2">10. Innovation and Research</h2>
            <p className="pb-2">
              Invest in research and development to discover new technologies
              and strategies for mitigating and adapting to climate change.
            </p>
          </div>
          <div id="section-11">
            <h2 className="font-bold my-2">11. Policy and Regulation</h2>
            <p className="pb-2">
              Implement and enforce policies that incentivize sustainable
              practices and penalize environmentally harmful activities.
            </p>
            <p className="pb-2">
              Set emission reduction targets and regularly update regulations to
              reflect scientific advancements.
            </p>
          </div>
          <div id="section-12">
            <h2 className="font-bold my-2">12. Individual Action</h2>
            <p className="pb-2">
              Encourage individuals to adopt sustainable lifestyles, reduce
              energy consumption, and make environmentally conscious choices.
            </p>
          </div>
          <p>
            Combating climate change requires a collective effort from
            governments, businesses, communities, and individuals. The
            combination of these solutions, along with ongoing innovation and
            adaptation, can contribute to a more sustainable and resilient
            future.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
