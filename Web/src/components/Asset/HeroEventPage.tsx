import hero_event from "../../../public/bg2.jpg";
import Link from "next/link";

export default function HeroEventPage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${hero_event.src})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md bg-red-900/80 rounded-xl px-4 py-4">
          <h1 className="mb-5 text-5xl font-bold text-white">Ongoing Events</h1>
          <p className="mb-5 text-white">
            Find and book tickets for anime and Japanese culture events here.
            Browse events, select your tickets, and check out with your payment
            details. You’ll get a confirmation email with your tickets. Keep
            your ticket handy for the event, and look out for updates and
            reminders from us. Need help? Contact our support team. Enjoy the
            event!
          </p>
          <Link href={"/help"}>
            <button className="btn text-white bg-gradient-to-l from-black/0 to-black/90 border-black text-2xl font-semibold">
              FAQ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
