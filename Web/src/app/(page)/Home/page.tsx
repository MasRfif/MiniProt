import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/1.Header/Navbar";
import HomeCrls from "@/components/2.Body/HomeCarousel";
import Testimonial from "@/components/2.Body/Testimonies";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <div
            className="hero min-h-screen  "
            style={{
              backgroundImage: "url(bg.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 w-full h-full p-10 bg-gradient-to-l from-black/0 to-black/90"></div>
            <section className="flex  w-full h-full justify-between">
              <div className=" flex flex-col  items-start justify-center text-white w-full h-full top-96  p-10 ">
                <h1 className="text-4xl font-bold mb-4 font-fira-sans">
                  Welcome to Our Website!
                </h1>
                <p className="text-lg xs:text-base  mb-8 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  porro voluptas. Non consectetur voluptas iure obcaecati.
                  Veritatis laborum consequatur, cumque repellendus rem tempore,
                  expedita ullam aliquid laudantium velit dignissimos magnam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore deleniti, nostrum temporibus nesciunt aut et pariatur
                  veritatis obcaecati fugit odio eligendi iste excepturi quia,
                  modi quibusdam vero asperiores hic? Asperiores?
                </p>
                <button className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200">
                  Get Started
                </button>
              </div>
              <div className="flex max-[420px]:hidden justify-center items-center text-white w-full h-full">
                <div className="carousel gap-5 max-w-[49rem] carousel-end rounded-box">
                  <div className="carousel-item px-50 ">
                    <div className="card lg:card-side   bg-red-900 shadow-xl">
                      <figure>
                        <Image
                          src="/TestHero1.jpg"
                          alt="Shoes"
                          width={600}
                          height={600}
                          className="object-cover w-[400px] h-[500px]"
                        />
                      </figure>
                      <div className="card-body w-96">
                        <h2 className="card-title">
                          Event name
                          <div className="badge badge-secondary font-fira-sans">
                            NEW
                          </div>
                        </h2>

                        <p>
                          Event description Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Molestiae cum numquam
                          quaerat corrupti, exercitationem incidunt alias,
                          tenetur ea quod beatae minus labore obcaecati odit.
                          Corrupti, non ut! Eveniet, aliquid autem!
                        </p>
                        <div className="card-actions justify-end">
                          <button className="btn badge bg-slate-700 outline outline-2 outline-red-700 text-white">
                            Event page Button
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item px-50 ">
                    <div className="card lg:card-side   bg-red-900 shadow-xl">
                      <figure>
                        <Image
                          src="/TestHero1.jpg"
                          alt="Shoes"
                          width={600}
                          height={600}
                          className="object-cover w-[400px] h-[500px]"
                        />
                      </figure>
                      <div className="card-body w-96">
                        <h2 className="card-title">
                          Event name
                          <div className="badge badge-secondary font-fira-sans">
                            NEW
                          </div>
                        </h2>

                        <p>
                          Event description Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Molestiae cum numquam
                          quaerat corrupti, exercitationem incidunt alias,
                          tenetur ea quod beatae minus labore obcaecati odit.
                          Corrupti, non ut! Eveniet, aliquid autem!
                        </p>
                        <div className="card-actions justify-end">
                          <button className="btn badge bg-slate-700 outline outline-2 outline-red-700 text-white">
                            Event page Button
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item px-50 ">
                    <div className="card lg:card-side   bg-red-900 shadow-xl">
                      <figure>
                        <Image
                          src="/TestHero1.jpg"
                          alt="Shoes"
                          width={600}
                          height={600}
                          className="object-cover w-[400px] h-[500px]"
                        />
                      </figure>
                      <div className="card-body w-96">
                        <h2 className="card-title">
                          Event name
                          <div className="badge badge-secondary font-fira-sans">
                            NEW
                          </div>
                        </h2>

                        <p>
                          Event description Lorem ipsum, dolor sit amet
                          consectetur adipisicing elit. Molestiae cum numquam
                          quaerat corrupti, exercitationem incidunt alias,
                          tenetur ea quod beatae minus labore obcaecati odit.
                          Corrupti, non ut! Eveniet, aliquid autem!
                        </p>
                        <div className="card-actions justify-end">
                          <button className="btn badge bg-slate-700 outline outline-2 outline-red-700 text-white">
                            Event page Button
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <HomeCrls />
        <Testimonial />
      </main>
    </>
  );
}
