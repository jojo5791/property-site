import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: "url('/images/MainPage_House.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Hero content */}
        <div className="relative z-10 px-4 -translate-y-32">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to Urbane Horizon
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Shaping the Skyline of a City
          </p>
          <p className="mt-2 text-lg md:text-xl">
            Explore our latest property developments
          </p>

          <Link href="/projects">
            <button className="mt-6 bg-yellow-600 text-white px-6 py-3 rounded text-lg hover:bg-yellow-700 transition">
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
