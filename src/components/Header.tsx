'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-charity-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-900">Hope Foundation</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-charity-primary transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-charity-primary transition-colors">
              About
            </Link>
            <Link href="#programs" className="text-gray-700 hover:text-charity-primary transition-colors">
              Programs
            </Link>
            <Link href="#impact" className="text-gray-700 hover:text-charity-primary transition-colors">
              Impact
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-charity-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <button className="btn-primary">
              Donate Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link href="#home" className="block px-3 py-2 text-gray-700 hover:text-charity-primary">
                Home
              </Link>
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-charity-primary">
                About
              </Link>
              <Link href="#programs" className="block px-3 py-2 text-gray-700 hover:text-charity-primary">
                Programs
              </Link>
              <Link href="#impact" className="block px-3 py-2 text-gray-700 hover:text-charity-primary">
                Impact
              </Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-charity-primary">
                Contact
              </Link>
              <div className="px-3 py-2">
                <button className="btn-primary w-full">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}