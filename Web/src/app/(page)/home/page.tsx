import Navbar from "@/components/1.Header/Navbar";
import HeroHome from "@/components/2.Body/HeroHomePage";
import HomeCrls from "@/components/2.Body/HomeCarousel";
import Testimonial from "@/components/2.Body/Testimonies";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroHome />
        <HomeCrls />
        <Testimonial />
      </main>
    </>
  );
}
