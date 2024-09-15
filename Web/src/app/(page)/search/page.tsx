"use client";

import { useSearchParams } from "next/navigation";
import Navbar from "@/components/1.Header/Navbar";

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuary = search ? search?.get(`q`) : null;

  const encodedSearchQuery = encodeURI(searchQuary || "");

  return (
    <>
      <Navbar />
      <div className="flex w-full pt-20 h-screen justify-center">
        Search Page
      </div>
    </>
  );
};

export default SearchPage;
