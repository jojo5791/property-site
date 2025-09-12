import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <header
        className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('../images/bghouse.jpg')" }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold">Welcome to Urbane Horizon</h1>
          <p className="mt-4 text-xl">Shaping the Skyline of a City</p>
          <p className="mt-2 text-xl">Explore our latest property developments</p>
          <Link href="/projects">
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded text-lg font-semibold">
              View Projects
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}
