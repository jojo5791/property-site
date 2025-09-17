"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black border-b border-gray-900">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-28 md:h-14 md:w-36 lg:h-16 lg:w-44">
            <Image
              src="/images/LOGO-cropped2.svg"
              alt="Logo"
              fill
              className="object-contain cursor-pointer invert"
              unoptimized
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-white hover:text-gray-400">Home</Link>
          <Link href="/projects" className="text-white hover:text-gray-400">Projects</Link>
          <Link href="/about" className="text-white hover:text-gray-400">About</Link>
          <Link href="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-black py-4">
          <Link href="/" className="text-white hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" className="text-white hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/about" className="text-white hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="text-white hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
