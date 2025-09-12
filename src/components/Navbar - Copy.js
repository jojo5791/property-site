import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
<Link href="/">
    <div className="flex items-center space-x-2">
      <img src="/images/UH.png" alt="My Property Logo" className="h-8 w-auto" />
      <span className="font-bold text-xl"></span>
    </div>
  </Link>

 {/* Navigation links */}
  <div className="flex space-x-6">
    <Link href="/">Home</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
  </div>
    </nav>
  );
}
