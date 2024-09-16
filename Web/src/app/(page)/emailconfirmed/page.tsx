import Link from "next/link";

export default function emailConfirmed() {
  return (
    <>
      <div className="hero bg-red-900 min-h-screen text-white">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Email successfully confirmed!
            </h1>
            <p className="py-6">You're ready to go!</p>
            <Link href="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
