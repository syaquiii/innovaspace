import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { KelasProvider } from "@/context/KelasContext";
import { MentorProvider } from "@/context/MentorContext";
import { RiwayatPembayaranProvider } from "@/context/RiwayatPembayaranContext";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "innovaspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  font-poppins relative `}>
        <KelasProvider>
          <MentorProvider>
            <RiwayatPembayaranProvider>
              <Navbar />
              {children}
              <Footer />
            </RiwayatPembayaranProvider>
          </MentorProvider>
        </KelasProvider>
      </body>
    </html>
  );
}
