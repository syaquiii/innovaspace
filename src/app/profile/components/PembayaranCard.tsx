import { Button } from "@/components/ui/Button";
import { RiwayatPembayaran } from "@/type/TDummyData";
import React, { FC } from "react";

type PembayaranCardProps = {
  pembayaran: RiwayatPembayaran;
};

const PembayaranCard: FC<PembayaranCardProps> = ({ pembayaran }) => {
  const getButtonStyle = () => {
    if (pembayaran.status === "pembayaran terkonfirmasi") {
      return "green";
    } else if (pembayaran.status === "pembayaran gagal") {
      return "red";
    } else if (pembayaran.status === "menunggu pembayaran") {
      return "orange";
    }
    return undefined;
  };

  return (
    <div className="w-full bg-light-default rounded-lg p-4 min-h-44">
      <h4 className="font-bold">{pembayaran.tipe_premium}</h4>
      <h6 className="text-sm">{pembayaran.date_pembelian}</h6>
      <h6 className="text-sm">Kode Pembelian: {pembayaran.kode_acak}</h6>
      <div className="flex justify-between font-bold text-lg mt-2">
        <span>Metode Pembayaran</span>
        <span>{pembayaran.metode_pembayaran}</span>
      </div>
      <div className="flex justify-between font-bold text-lg mt-2">
        <span>Total</span>
        <span>Rp {pembayaran.harga}</span>
      </div>
      <Button variant={getButtonStyle()} className="w-full mt-4  text-black">
        {pembayaran.status}
      </Button>
    </div>
  );
};

export default PembayaranCard;
