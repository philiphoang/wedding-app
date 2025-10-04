"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigations = (
    <>
      <Link href="/" className="block hover:text-pink-500 no-underline hover:underline">
        Home
      </Link>
      <Link href="/gallery" className="block hover:text-pink-500 no-underline hover:underline">
        Gallery
      </Link>
      <Link href="/rsvp" className="block hover:text-pink-500 no-underline hover:underline">
        RSVP
      </Link>
      <Link href="/travel" className="block hover:text-pink-500 no-underline hover:underline">
        Travel & Stay
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="relative flex justify-center items-center h-16">
        {/* Desktop Menu (centered) */}
        <div className="hidden md:flex space-x-8 text-black">{navigations}</div>

        {/* Mobile Hamburger (right-aligned) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white absolute right-4 md:hidden text-pink-600 hover:bg-pink-100 focus:outline-none transition"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-6 py-4 space-y-3 text-right">{navigations}</div>
        </div>
      )}
    </nav>
  );
}
