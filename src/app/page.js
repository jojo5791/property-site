"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
     

      {/* Hero Section with background image */}
      <header
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-black"
        style={{ backgroundImage: "url('/images/bgHouse.jpg')" }}
      >
        <h1 className="text-5xl font-bold drop-shadow-lg">Welcome to Urbane Horizon</h1>
        <p className="mt-4 text-xl drop-shadow-md">Shaping the Skyline of a City</p>
        <p className="mt-2 text-xl drop-shadow-md">Explore our latest property developments</p>

        <Link href="/projects">
          <button className="mt-6 bg-yellow-600 text-white px-6 py-3 rounded text-lg hover:bg-yellow-700">
            View Projects
          </button>
        </Link>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">About Urbane Horizon</h2>
        <p className="text-lg text-gray-700">
          We are a leading property development company creating modern and sustainable
          homes across Malaysia. Our vision is to build communities that last for generations.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700">Get in touch with our team today!</p>
      </section>
    </div>
  );
}
