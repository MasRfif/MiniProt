import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "Home" },
    { name: "Product", href: "/Product" },
    { name: "About", href: "/About" },
    { name: "Teams", href: "/Teams" },
  ];
  return <nav className="fixed w-full h-20 shadow-xl bg-white"></nav>;
}
