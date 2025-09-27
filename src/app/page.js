import Link from "next/link";
import Image from "next/image";
import { Playfair_Display, Poppins, Open_Sans } from "next/font/google";

// Import fonts
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  const projects = [
    {
      title: "Urbane Horizon",
      image: "/images/MainPage_House.jpg",
      link: "/projects/1",
      type: "current",
    },
    {
      title: "Skyline Residences",
      image: "/images/project1.jpg",
      link: "/projects/skyline",
      type: "current",
    },
    {
      title: "Green Living Towers",
      image: "/images/project3.jpg",
      link: "/projects/green-living",
      type: "future",
    },
    {
      title: "Eco Valley Homes",
      image: "/images/project4.jpg",
      link: "/projects/eco-valley",
      type: "future",
    },
  ];

  return (
    <div className={`min-h-screen ${poppins.className}`}>
      {/* Hero Section with Video Background */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/DayQuick1.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-4 -translate-y-48">
          <h1
            className={`${openSans.className} text-3xl md:text-5xl`}
            style={{ color: "#FFFFFF", letterSpacing: "0.05em" }}
          >
            Urbane Horizon
          </h1>
          <h2
            className={`${openSans.className} text-lg md:text-2xl mt-3 tracking-wide`}
          >
            Shaping the Skyline of a City
          </h2>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gray-100 py-16 px-6 md:px-12">
        {/* Current Projects */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-left">
            Current Projects
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {projects
              .filter((p) => p.type === "current")
              .map((project, index) => (
                <Link
                  key={index}
                  href={project.link}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-72 transform transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Lighter overlay so image is visible */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition duration-500"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <span className="inline-block bg-white text-black px-4 py-2 rounded-lg text-sm font-medium group-hover:bg-yellow-400 group-hover:text-black transition">
                      View Project →
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Future Projects */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-left">
            Future Projects
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {projects
              .filter((p) => p.type === "future")
              .map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-72 opacity-60 blur-sm group-hover:opacity-80 group-hover:blur-0 transition duration-500"
                  />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <span className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-medium">
                      Coming Soon
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
        <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold`}>
          About Us
        </h2>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
          Tell your story here. Highlight your values, mission, and what makes
          your property developments stand out.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold`}>
          Contact
        </h2>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
          Get in touch with us here. Provide details like phone number, email,
          or a contact form link.
        </p>
      </section>
    </div>
  );
}
