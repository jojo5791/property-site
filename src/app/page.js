import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
            <span className="font-bold text-xl">Urbane Horizon</span>
          </div>

          {/* Links */}
          <div className="space-x-6">
            <Link href="/" className="hover:text-yellow-500">Home</Link>
            <Link href="/projects" className="hover:text-yellow-500">Projects</Link>
            <Link href="/about" className="hover:text-yellow-500">About</Link>
            <Link href="/contact" className="hover:text-yellow-500">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: "url('/images/house4.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Hero content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Welcome to Urbane Horizon</h1>
          <p className="mt-4 text-xl">Shaping the Skyline of a City</p>
          <p className="mt-2 text-xl">Explore our latest property developments</p>

          <Link href="/projects">
            <button className="mt-6 bg-yellow-600 text-white px-6 py-3 rounded text-lg hover:bg-yellow-700 transition">
              View Projects
            </button>
          </Link>
        </div>
      </header>

      {/* Dummy sections for scrolling */}
      <section id="projects" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Our Projects</h2>
        <p className="mt-4">Showcase your property projects here.</p>
      </section>

      <section id="about" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4">Tell your story here.</p>
      </section>

      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Get in touch with us here.</p>
      </section>
    </div>
  );
}
