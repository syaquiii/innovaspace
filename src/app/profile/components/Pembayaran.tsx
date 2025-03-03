import { useRiwayatContext } from "@/hooks/useRiwayatContext";
import React from "react";
import PembayaranCard from "./PembayaranCard";

const Pembayaran = () => {
  const { getPembayaranById } = useRiwayatContext();
  const pembayaran = getPembayaranById(1);
  if (!pembayaran) {
    return <div>Kamu belum melakukan pembayaran apa apanich</div>;
  }
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {pembayaran.map((item, index) => (
        <PembayaranCard key={index} pembayaran={item} />
      ))}
    </div>
  );
};

export default Pembayaran;
