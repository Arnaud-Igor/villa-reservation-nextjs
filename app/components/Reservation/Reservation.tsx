"use client";
import { CalendarDays } from "lucide-react";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

const PricePerNight: number = 50000;

function Reservation() {
  const [startDate, setStartDate] = useState<Date | undefined>();

  const [endDate, setEndDate] = useState<Date | undefined>();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleStartDateChange = (date: Date | undefined) => {
    const currentDate = new Date();
    if (date && date < currentDate) {
      setStartDate(undefined);
      setEndDate(undefined);
    }

    if (date && endDate && date > endDate) {
      setEndDate(undefined);
    }
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | undefined) => {
    if (date && startDate && date >= startDate) {
      setEndDate(undefined);
    }
    setEndDate(date);
  };

  const handleCalculateTotalNights = () => {
    if (startDate && endDate) {
      const diffTime = endDate.getTime() - startDate.getTime();

      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    return 0;
  };

  const totalNight = handleCalculateTotalNights();
  const totalPrice = totalNight * PricePerNight;

  const handleSubmit = () => {
    if (startDate && endDate) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setStartDate(undefined);
        setEndDate(undefined);
      }, 3000);
    }
  };

  return (
    <div className="container">
      <div className="max-w-[1200px] mx-auto p-6 rounded-xl space-y-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Réservez votre séjour
        </h1>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 justify-center">
            <CalendarDays size={24} />
            <p className="md:text-xl">Choisissez vos dates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl mx-auto">
            <div>
              <p className="text-sm font-medium text-gray-800 text-center py-2">
                Date de début
              </p>
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={handleStartDateChange}
                className="rounded-md border border-gray-300 shadow-md"
              />
            </div>
            {startDate && (
              <div>
                <p className="text-sm font-medium text-gray-800 text-center py-2">
                  Date de fin
                </p>
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={handleEndDateChange}
                  className="rounded-md border border-gray-300 shadow-md"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {totalNight > 0 && (
        <div className="mx-auto max-w-[600px] p-6 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Récapitulatif
          </h2>
          <div className="space-y-4 border border-gray-300 shadow-xl rounded-xl p-6">
            <div className="flex justify-between">
              <p className="text-lg font-bold">Nombre de nuits : </p>
              <p className="text-lg">{totalNight}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-bold">Prix par nuit : </p>
              <p className="text-lg">{PricePerNight} FCFA</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-bold">Prix total : </p>
              <p className="text-lg">{totalPrice} FCFA</p>
            </div>
            <div className="flex">
              <button
                onClick={handleSubmit}
                className={`${
                  isSubmitted ? "bg-green-500" : "bg-blue-500"
                } text-white rounded-md py-2 px-4 w-full`}
              >
                {isSubmitted ? (
                  <p className="text-center font-bold">Réservation confirmée</p>
                ) : (
                  <p className="text-center font-bold">
                    Confirmer la réservation
                  </p>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reservation;
