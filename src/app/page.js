import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <header className="relative h-screen flex flex-col justify-start items-center text-center text-white overflow-hidden">
        
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

        {/* Hero content */}
        <div className="relative z-10 px-4 pt-28 md:pt-36">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 tracking-wide">
            Urbane Horizon
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-200 tracking-wide">
            Shaping the Skyline of a City
          </p>

          <p className="mt-16 text-lg md:text-xl text-gray-100">
            Explore our latest property developments
          </p>

          <Link href="/projects">
            <button className="mt-4 bg-yellow-600 text-white px-5 py-2 rounded text-sm md:text-base hover:bg-yellow-700 transition">
              View Projects
            </button>
          </Link>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Our Projects</h2>
        <p className="mt-4">Showcase your property projects here.</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4">Tell your story here.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Get in touch with us here.</p>
      </section>
    </div>
  );
}
