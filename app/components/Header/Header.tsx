/* eslint-disable react/no-unescaped-entities */
import React from "react";

function Header() {
  return (
    <header
      className="relative flex items-center justify-center bg-cover bg-fixed bg-center h-screen bg-blue-300"
      style={{
        backgroundImage: `url("/img-home.jpg")`,
      }}
    >
      <div className="absolute bg-black inset-0 opacity-70"></div>
      <div className="container relative text-white text-center space-y-7 md:space-y-10">
        <h1 className="text-xl md:text-6xl font-bold">{`Nos Villas d'Exception`}</h1>
        <p className="text-xs md:text-2xl">
          Chacune de nos villas est soigneusement sélectionnée pour répondre aux
          attentes des voyageurs les plus exigeants. Des intérieurs raffinés,
          des équipements de prestige et des emplacements privilégiés vous
          assurent un confort absolu. Profitez de piscines à débordement, de
          jardins privés, de spas intégrés, et de services sur mesure tels qu'un
          chef personnel ou un concierge dédié, pour une expérience de luxe.
        </p>
        <button className="text-white text-base md:text-xl bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-xl font-bold animate-bounce">
          Réserver votre villa !
        </button>
      </div>
    </header>
  );
}

export default Header;
