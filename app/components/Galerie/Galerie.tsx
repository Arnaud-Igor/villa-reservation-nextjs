/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

const GalerieImages: string[] = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
];

function Galerie() {
  const [currentImage, setCurrentImage] = useState<string>(GalerieImages[0]);

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 py-6">
        <h1 className="font-bold text-2xl md:text-4xl text-center md:mb-6">
          Notre Galerie de Villas de Prestige
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:py-8 md:px-4 md:border md:border-gray-300">
        <div className="grid grid-cols-1">
          <div className="flex flex-col md:justify-center md:h-[400px]">
            <h2 className="font-bold text-center text-xl md:text-3xl md:text-start mb-6">
              Une Architecture Unique
            </h2>
            <p className="text-gray-700 text-justify lg:text-xl">
              Nos villas sont bien plus que des espaces de vie, ce sont des
              œuvres d'art. Inspirées par les dernières tendances
              architecturales et les traditions locales, elles offrent une
              harmonie parfaite entre le design moderne et l'authenticité.
              D'immenses baies vitrées laissant entrer la lumière naturelle, des
              piscines à débordement qui semblent se fondre dans l'horizon, des
              jardins privés luxuriants, et des intérieurs aux matériaux nobles.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-3">
            <div className="w-full h-[400px] ring-2 ring-yellow-500">
              <img
                src={currentImage}
                alt="Villa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex md:flex-col md:h-[400px] md:p-2 gap-3 md:overflow-y-auto">
              {GalerieImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(image)}
                  className={`w-full h-14 md:h-20 ${
                    currentImage === image && "ring-2 ring-yellow-500"
                  }`}
                >
                  <img
                    src={image}
                    alt="Villa"
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Galerie;
