"use client";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <section
        id="hero"
        className="flex w-full h-screen self-center overflow-hidden"
      >
        {" "}
        <section className="w-[980px] flex justify-center items-center font-bold rounded-r-3xl bg-red-700">
          <div className="bg-white rounded-3xl  flex-col top-0  items-center justify-center p-9 w-[450px] h-96">
            <form>
              <h1 className="text-3xl font-bold mb-6 text-[#54432f] ">
                Sign In
              </h1>

              <div className="mb-4">
                <div className="w-[380px]">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-2 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                      placeholder=" "
                      type="email"
                      name="email"
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-black peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Email
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="w-[380px]">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-2 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                      placeholder=" "
                      type="password"
                      name="password"
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-black peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Password
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xs text-gray-500 italic">
                  Forgot your password?{" "}
                  <a className="text-yellow-700 hover:text-yellow-950" href="#">
                    Click here
                  </a>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-yellow-700 hover:text-yellow-950"
                  />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
                <a
                  className="inline-block align-baseline font-bold text-sm text-yellow-700 hover:text-yellow-950"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
              <div className="mt-4">
                <button
                  className="bg-yellow-700 hover:text-yellow-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="flex justify-center items-center w-full h-full ">
          <div className="bg-black w-[95%] h-[95%] rounded-xl overflow-hidden shadow-md">
            <div className=" bg-orange-950/80" w-10 />
            <Image
              className="top-0 object-cover  bg-black w-[100%] h-[100%] rounded-xl overflow-hidden"
              src="https://images.unsplash.com/photo-1641390968145-15e506e768a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="/"
              width={500}
              height={500}
            />
            <form></form>
          </div>
        </section>
      </section>
    </>
  );
}
