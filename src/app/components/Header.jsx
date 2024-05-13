"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
function Header() {
  const router = useRouter();
  const [pokeName, setPokeName] = useState("");

  const handleInput = (e) => {
    setPokeName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pokesearch/${pokeName}`);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[300px] flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-white text-5xl">NextJs Pokemon Finder App</h1>
        <p className="text-white text-2xl">Find you favorit pokemon</p>
        <form onSubmit={handleSubmit} className="flex mt-2">
          <input
            type="text"
            className="w-full rounded-md border border-gray-500 px-4 py-2 text-gray-400 shadow-md"
            placeholder="Pokemon Name..."
            onChange={handleInput}
          />
          <button
            className="inline-flex items-center px-4 py-2 rounded-md bg-green-500 shadow-md text-white mx-2"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
