import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
 	<main className="flex-grow pt-8 px-6 max-w-6xl mx-auto">
        {children}
 	</main>
        <Footer />
      </body>
    </html>
  );
}
