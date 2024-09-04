import Link from "next/link";
import Navbar from "@/components/1.Header/Navbar";
import Footer from "@/components/3.Footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full flex flex-col items-center justify-center text-center text-3xl font-bold">
              Welcome to our website
            </div>
            <div className="w-full flex flex-col items-center justify-center text-center text-xl font-semibold">
              This currently Our HomePage Its under construction
            </div>
            <Link
              href="/"
              className="py-4 px-8 bg-yellow-950 text-white font-bold rounded-lg hover:bg-yellow-800 transition duration-300 ease-in-out"
            >
              Contact King Charles
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
