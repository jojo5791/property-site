import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import { Playfair_Display, Poppins } from "next/font/google";

// Load fonts
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-playfair" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-poppins" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="bg-gray-100 font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
