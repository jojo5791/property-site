import Link from 'next/link';

export default function Home() {
  return (
  <div className="min-h-screen bg-gray-100">
   
      <header className="h-screen bg-gray-200 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Welcome to Urbane Horizon</h1>
	<p className="mt-4 text-xl">Shaping the Skyline of a city</p>
        <p className="mt-4 text-xl">Explore our latest property developments</p>
        <Link href="/projects">
          <button className="mt-6 bg-yellow-600 text-white px-6 py-3 rounded text-lg">View Projects</button>
        </Link>
      </header>
    </div>
  );
}
