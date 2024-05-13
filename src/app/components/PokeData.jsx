"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
function PokeData() {
  const [poke, setPoke] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokeData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const pokeData = await res.json();
      console.log(pokeData);
      setPoke(pokeData.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokeData();
  }, []);

  return (
    <div className="container text-center mx-auto">
      {loading ? (
        <p className="">Loading...</p>
      ) : (
        <div className="grid grid-cols-5">
          {poke.map((val, index) => (
            <Link
              key={val.name}
              href={`/pokeinfo/[id]`}
              as={`/pokeinfo/${index + 1}`}
            >
              <div
                key={index}
                className="flex justify-center items-center shadow-md transition rounded-md m-3 cursor-pointer hover:shadow-lg"
              >
                <div>
                  <h3>{val.name}</h3>
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                      index + 1
                    }.png`}
                    width={250}
                    height={250}
                    alt={val.name}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default PokeData;
