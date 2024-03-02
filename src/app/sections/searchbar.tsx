"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleChange = (e: any) => {
    e.preventDefault();
    const { value } = e.target;
    setSearchValue(value.trim());
  };

  const handleKeyPress = (e: any) => {
    e.preventDefault();
    console.log(e.key);

    if (e.key === "Enter" && searchValue !== "") {
      router.push(`/search/${searchValue}`);
    }
  };

  return (
    <div className="fixed top-10 h-10 flex gap-5 z-50">
      <div
        onClick={() => setShow(!show)}
        className="bg-white rounded-full p-2 flex items-center hover:bg-white/60 cursor-pointer scale-100 w-10 justify-center hover:scale-125 duration-200">
        <Image
          width={20}
          height={20}
          src={"/searchIcon.png"}
          alt="search icon"
        />
      </div>
      <div>
        <input
          style={{
            opacity: show ? 1 : 0,
            transition: "opacity  ease-in-out .5s",
          }}
          type="text"
          onKeyUp={handleKeyPress}
          onChange={handleChange}
          value={searchValue}
          placeholder="Search a movie .."
          className="bg-zinc-600 rounded-full h-10 outline-none px-5 text-sm"
        />
      </div>
    </div>
  );
}
