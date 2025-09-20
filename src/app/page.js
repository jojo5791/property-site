import Link from "next/link";
import { Playfair_Display, Poppins } from "next/font/google";
import { motion } from "framer-motion";

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

        {/* Hero content (title + subtitle, moved higher) */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-4 -translate-y-56"
        >
          <h1
            className={`${playfair.className} text-3xl md:text-5xl font-bold`}
            style={{
              color: "#FFD700", // Gold title
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)",
            }}
          >
            Urbane Horizon
          </h1>
          <h2
            className={`${playfair.className} text-sm md:text-lg mt-2 tracking-wide`}
            style={{
              color: "#d1d5db", // Silver subtitle
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
            }}
          >
            Shaping the Skyline of a City
          </h2>
        </motion.div>

        {/* Bottom tagline + button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-10 text-center z-10 px-4"
        >
          <p className="text-sm md:text-base text-gray-200 italic mb-3 drop-shadow-md">
            Explore our latest property developments
          </p>

          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-600 text-white px-4 py-2 rounded text-sm md:text-base hover:bg-yellow-700 transition"
            >
              View Projects
            </motion.button>
          </Link>
        </motion.div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 text-center">
        <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold`}>
          Our Projects
        </h2>
        <p className="mt-3 text-gray-700">Showcase your property projects here.</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
        <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold`}>
          About Us
        </h2>
        <p className="mt-3 text-gray-700">Tell your story here.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold`}>
          Contact
        </h2>
        <p className="mt-3 text-gray-700">Get in touch with us here.</p>
      </section>
    </div>
  );
}
