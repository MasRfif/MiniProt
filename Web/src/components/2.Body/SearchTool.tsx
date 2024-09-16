import Image from "next/image";
import Link from "next/link";
import Tag from "../Asset/Tags";

export default function SearchTool() {
  return (
    <>
      <div className=" flex md:flex-row min-xl:flex-col sm:flex-col md:w-fit md:item-center gap-14 xl:w-[115rem] max-s:w-[25.3rem] max-s:flex-col sm:w-fit max-[425px]:w-[24rem] s:h-fit h-fit bg-red-800 p-5 rounded-lg">
        <div className="flex  max-[425px]:flex-col">
          {" "}
          <div className=" w-96 max-s:w-full h-full ">
            <div className="justify-between items-center">
              <label className="block pb-3 text-3xl font-bold text-white">
                Find Your Weekplan here
              </label>
              <input
                className="mt-1 block w-full pl-3 text-sm h-10 text-gray-400 bg-black border border-red-700 rounded-md"
                type="text"
                placeholder="Enter Event Name"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn w-60 m-1">
                  Search by Tag
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <div className="mt-1 block w-full pl-3 text-sm border-gray-300 rounded-md">
                <button className="mt-1 block w-full px-4 py-2 text-sm font-medium border border-red-700 text-white bg-black hover:bg-slate-800 rounded-md">
                  Search
                </button>
              </div>
            </div>
          </div>
          <Tag />
        </div>

        <div className="flex items-center w-fit max-sm:w-96 max-s:w-80  max-s:px-0 max-s:pt-5 ">
          <div className="carousel  gap-9 sm:max-w-[40rem] min-xl:max-w-[80rem] max-w-[56rem] max-s:max-w-[20rem] max-s:mx-auto carousel-end rounded-box">
            <div className="carousel-item ">
              <div className="card bg-base-100 image-full w-96 sm:w-72 sm:h-36 h-fit max-s:h-52 max-s:w-80 shadow-xl">
                <figure>
                  <Image
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    width={600}
                    height={400}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="card bg-base-100 image-full w-96 sm:w-72 sm:h-36 h-fit max-s:h-52 max-s:w-80 shadow-xl">
                <figure>
                  <Image
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    width={600}
                    height={400}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="card bg-base-100 image-full w-96 sm:w-72 sm:h-36 h-fit max-s:h-52 max-s:w-80 shadow-xl">
                <figure>
                  <Image
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    width={600}
                    height={400}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="card bg-base-100 image-full w-96 sm:w-72  h-fit max-s:h-52 max-s:w-80 shadow-xl">
                <figure>
                  <Image
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    width={600}
                    height={400}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
