import RiwayatPembayaranContext from "@/context/RiwayatPembayaranContext";
import { useContext } from "react";

export const useRiwayatContext = () => {
  const context = useContext(RiwayatPembayaranContext);
  if (!context) {
    throw new Error(
      "useRiwayatPembayaran must be used within a RiwayatPembayaranProvider"
    );
  }
  return context;
};
