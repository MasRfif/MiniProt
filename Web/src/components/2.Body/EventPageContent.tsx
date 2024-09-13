import Link from "next/link";

export default function EventContent() {
  return (
    <>
      <section className="bg-base-200">
        {" "}
        <section className="flex pt-24 w-full justify-center  max-md:p-10">
          <div
            className="flex w-[90rem] rounded-xl h-96 justify-center bg-cover bg-center md:w-[50rem] lg:w-[70rem] "
            style={{ backgroundImage: "url(./test2.jpg)" }}
          ></div>
        </section>
        <section className="flex justify-center p-10 md:flex-coll lg:flex-col max-xl:flex-col">
          <div className=" w-[50rem] s:w-96 md:w-full lg:w-full xl:w-full">
            <div>
              <h1 className="text-2xl font-bold text-white">Event time</h1>
              <div className="flex p-4 items-center mt-2">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-2 text-sm text-white">12:20</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Event Genre</h1>
              <div className="flex p-4 items-center mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a2 2 0 012-2z"
                  />
                </svg>
                <span className="ml-2 text-sm text-white">
                  Event Genre/Tags
                </span>
              </div>
            </div>
            <div className="s:h-96 s:w-96 sm:w-[40rem] md:w-full lg:w-full xl:w-full overflow-hidden overflow-y-auto">
              <h2 className="text-2xl font-bold sticky top-0 bg-base-200 w-full h-10 text-white">
                Event Name
              </h2>
              <p className="text-white p-5 s:w-96 sm:w-[40rem]  md:w-full lg:w-full xl:w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                adipisci consequatur pariatur earum illo omnis tempore nostrum
                iusto deleniti incidunt quis doloribus facere, alias, et iste
                repudiandae temporibus veritatis magnam. Nam saepe nemo dolores
                et sapiente aut tempore expedita laboriosam nesciunt. A quas ab,
                fuga vel neque ipsam voluptate. Nobis voluptatum repellendus
                possimus quaerat laboriosam minus quo omnis accusantium hic. Eos
                aliquam iste accusamus soluta eum dicta numquam nostrum
                incidunt. Dolorem reprehenderit minus ullam perferendis
                provident similique maxime esse facilis totam perspiciatis
                distinctio, labore cupiditate autem quas eum molestiae eos? Nisi
                quos cumque atque! Beatae non blanditiis optio esse molestiae
                rerum, dolore velit vel quidem itaque? Voluptatem dolores
                nesciunt saepe temporibus quidem eum animi excepturi totam
                perferendis laborum. Consequatur, labore? Quisquam recusandae
                eius iusto explicabo similique impedit aliquid corporis eaque ad
                itaque! Ullam placeat quidem laborum dolor voluptas! Quidem sit
                labore et enim ut amet velit numquam porro odit nisi. Ut
                suscipit qui provident maxime voluptas praesentium. Vel fugit
                sint aut illum, tempore, dolorem aspernatur quis deserunt
                sapiente recusandae perferendis ipsum assumenda magni et enim
                cumque voluptatibus tenetur libero eos! Veritatis, error fugiat
                officiis molestias animi placeat dolorem enim unde facere
                consequatur magnam sequi odit minus non corporis eum debitis,
                veniam adipisci fugit possimus impedit dolore reprehenderit
                blanditiis! Odit, et! Excepturi quasi eius dolorum soluta iure
                repellendus quia aliquam perferendis, totam ex culpa modi enim,
                fugit quos aperiam fugiat veritatis, quas suscipit. Vero ratione
                est at! Praesentium facere nobis non! Laudantium voluptates
                error atque aliquam velit facilis unde suscipit, pariatur sit
                voluptate. Consequatur, distinctio illum. Minus doloremque
                officia, qui debitis eos asperiores autem beatae libero
                voluptatem! Maiores officiis harum ducimus? Dolores doloremque
                harum esse placeat minima sint ducimus aspernatur. Non qui cum
                quo ut, architecto id delectus asperiores nulla provident
                voluptate magnam mollitia quos iure corporis tempore sapiente
                officiis quam. Hic eaque commodi quas aperiam saepe repudiandae,
                harum magni ratione distinctio repellat, veniam asperiores unde
                temporibus? Distinctio labore quisquam ullam quos expedita.
                Natus dignissimos quia provident, illum sint quod molestias?
              </p>
            </div>
          </div>
          <div className="flex w-96 pt-10 pr-10 justify-center md:w-full lg:w-full xl:w-full ">
            <div className="w-96  md:w-full lg:w-full xl:w-96 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-center items-center">
              <div className="text-2xl font-bold text-gray-800">
                Ticket Price
              </div>
              <div className="mt-4 text-lg text-gray-600">$100 (USD)</div>
              <Link href="/home" className="p-5">
                <button className="mt-8 px-4 py-2 text-white bg-slate-700 outline outline-2 outline-red-700 rounded-btn">
                  Buy Ticket
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
