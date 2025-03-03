"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { RiwayatPembayaran } from "@/type/TDummyData";
import { dummyData } from "@/data/DummyData";

interface RiwayatPembayaranContextType {
  riwayatPembayaran: RiwayatPembayaran[];
  getPembayaranById: (id_user: number) => RiwayatPembayaran[] | undefined;
}

const RiwayatPembayaranContext = createContext<
  RiwayatPembayaranContextType | undefined
>(undefined);

export const RiwayatPembayaranProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [riwayatPembayaran, setRiwayatPembayaran] = useState<
    RiwayatPembayaran[]
  >([]);

  useEffect(() => {
    const fetchRiwayatPembayaran = () => {
      setRiwayatPembayaran(dummyData.riwayat_pembayaran);
    };

    fetchRiwayatPembayaran();
  }, []);

  const getPembayaranById = (id_user: number) => {
    return riwayatPembayaran.filter(
      (pembayaran) => pembayaran.id_user === id_user
    );
  };

  return (
    <RiwayatPembayaranContext.Provider
      value={{ riwayatPembayaran, getPembayaranById }}
    >
      {children}
    </RiwayatPembayaranContext.Provider>
  );
};

export default RiwayatPembayaranContext;
