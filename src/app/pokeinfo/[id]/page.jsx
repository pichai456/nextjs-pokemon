"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
function PokeInfo() {
  const param = useParams();
  const [poke, setPoke] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokeDetail = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${param.id}`);
      const pokeData = await res.json();
      console.log(pokeData);
      setPoke(pokeData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokeDetail();
  }, []);

  return (
    <div className="p-24">
      <Link href={"/"} className="rounded-md px-4 py-2 text-white bg-red-950">
        Go Back
      </Link>
      <div className="flex justify-center items-center mt-10">
        <div className="rounded-md shadow-md p-10">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h3 className="text-3xl">{poke.name}</h3>
              <Image
                src={poke.sprites?.other.home.front_default}
                width={300}
                height={300}
                alt={poke.name}
              />
              <div className="mt-5">
                <p className="my-3">Weight: {poke.weight}</p>
                <p className="my-3">
                  Abilities:{" "}
                  {poke.abilities?.map((val) => (
                    <span
                      key={val.ability?.name}
                      className="bg-gray-500 text-white px-3 py-1 mx-1 rounded-md"
                    >
                      {val.ability?.name}
                    </span>
                  ))}
                </p>
                <p className="my-3">
                  Types:{" "}
                  {poke.types?.map((val) => (
                    <span
                      key={val.type?.name}
                      className="bg-gray-500 text-white px-3 py-1 mx-1 rounded-md"
                    >
                      {val.type?.name}
                    </span>
                  ))}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokeInfo;
