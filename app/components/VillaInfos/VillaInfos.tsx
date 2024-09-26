"use client";
import React from "react";
import { CookingPot, Waves, Bath, Bed, Square, Film } from "lucide-react";

interface VillaInfosProps {
  surface: number;
  bedrooms: number;
  bathrooms: number;
  hasPool: boolean;
  hasKitchen: boolean;
  hasCinema: boolean;
}

function VillaInfos({
  surface,
  bedrooms,
  bathrooms,
  hasPool,
  hasKitchen,
  hasCinema,
}: VillaInfosProps) {
  return (
    <div className="container mb-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl md:text-4xl mb-6">
          Caractéristiques de la Villa
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-x-30 px-4 py-6 md:py-12 md:px-8 lg:px-12 md:shadow-lg shadow-md border-[0.5px] mt-6 ">
          <div className="flex items-center">
            <Square size={24} className="text-green-500" />
            <p className="text-xs sm:text-xl font-bold ml-3">{surface} m²</p>
          </div>
          <div className="flex items-center">
            <Bed size={24} className="text-yellow-500" />
            <p className="text-xs sm:text-xl font-bold ml-3">
              {bedrooms} Chambres
            </p>
          </div>
          <div className="flex items-center">
            <Bath size={24} className="text-indigo-500" />
            <p className="text-xs sm:text-xl font-bold ml-3">
              {bathrooms} Baignoires
            </p>
          </div>
          <div className="flex items-center">
            <CookingPot size={24} className="text-orange-500" />
            <p className="text-xs sm:text-xl font-bold ml-3">
              {hasKitchen ? "Cuisine" : "Pas de cuisine"}
            </p>
          </div>
          <div className="flex items-center">
            <Waves size={24} className="text-blue-500" />
            <p className="text-xs sm:text-xl font-bold ml-3">
              {hasPool ? "Piscine privée" : "Pas de piscine"}
            </p>
          </div>
          <div className="flex items-center">
            <Film size={24} className="text-red-500" />
            <p className="text-xs sm:text-xl font-bold ml-3">
              {hasCinema ? "Cinéma" : "Pas de salle de cinéma"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VillaInfos;
//m²
