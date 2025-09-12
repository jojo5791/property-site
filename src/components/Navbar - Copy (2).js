import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b border-gray-900">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/LOGO-cropped2.svg"
            alt="Logo"
            width={180}
            height={80}
            className="object-contain cursor-pointer"
            unoptimized
         />
          </Link>
         {/* Menu */}
        <div className="flex space-x-8 items-center">
          <Link href="/" className="text-white hover:text-gray-400">Home</Link>
          <Link href="/projects" className="text-white hover:text-gray-400">Projects</Link>
          <Link href="/about" className="text-white hover:text-gray-400">About</Link>
          <Link href="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
