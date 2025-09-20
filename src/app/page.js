import Link from "next/link";
import { Playfair_Display, Poppins } from "next/font/google";

// Import fonts
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function Home() {
  return (
    <div className={`min-h-screen ${poppins.className}`}>
      {/* Hero Section with Video Background */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
        
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/DayQuick1.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero content (title only) */}
        <div className="relative z-10 px-4 -translate-y-40">
          <h1
            className={`${playfair.className} text-2xl md:text-4xl font-bold`}
            style={{ color: "#FFD700" }} // Gold color
          >
            Urbane Horizon shaping the skyline of a city
          </h1>
        </div>

        {/* Bottom tagline + button */}
        <div className="absolute bottom-10 text-center z-10 px-4">
          <p className="text-xs md:text-sm text-gray-200 tracking-wide italic mb-3">
            Explore our latest property developments
          </p>

          <Link href="/projects">
            <button className="bg-yellow-600 text-white px-4 py-2 rounded text-sm md:text-base hover:bg-yellow-700 transition">
              View Projects
            </button>
          </Link>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 text-center">
        <h2
          className={`${playfair.className} text-2xl md:text-3xl font-bold`}
        >
          Our Projects
        </h2>
        <p className="mt-3 text-gray-700">
          Showcase your property projects here.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
        <h2
          className={`${playfair.className} text-2xl md:text-3xl font-bold`}
        >
          About Us
        </h2>
        <p className="mt-3 text-gray-700">
          Tell your story here.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2
          className={`${playfair.className} text-2xl md:text-3xl font-bold`}
        >
          Contact
        </h2>
        <p className="mt-3 text-gray-700">
          Get in touch with us here.
        </p>
      </section>
    </div>
  );
}
