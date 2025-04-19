"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6 text-red-500"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 8v4l3 3" />
                            <path d="M8.5 8.5a2.5 2.5 0 0 0 0 3.5l3 3a2.5 2.5 0 0 0 3.5 0l.5-.5" />
                        </svg>
                        <span className="font-bold text-gray-800">Car Doctor</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium text-gray-800 hover:text-red-500">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-red-500">
                        About
                    </Link>
                    <Link href="/services" className="text-sm font-medium text-gray-600 hover:text-red-500">
                        Services
                    </Link>
                    <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-red-500">
                        Blog
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-red-500">
                        Contact
                    </Link>
                </nav>

                {/* Right side icons and button */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-4">
                        {/* Shopping Cart Icon */}
                        <Link href="/cart" className="text-gray-600 hover:text-red-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            <span className="sr-only">Shopping Cart</span>
                        </Link>

                        {/* Search Icon */}
                        <Link href="/search" className="text-gray-600 hover:text-red-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <span className="sr-only">Search</span>
                        </Link>
                    </div>

                    {/* Appointment Button */}
                    <Link
                        href="/login"
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        Log in
                    </Link>
                    {/* <Link
                        href="/appointment"
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        Appointment
                    </Link> */}

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-red-500 hover:bg-gray-100 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                    <Link
                        href="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-red-500 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-red-500 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/services"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-red-500 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        href="/blog"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-red-500 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-red-500 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>

                    <div className="flex items-center gap-4 px-3 py-2">
                        <Link href="/cart" className="text-gray-600 hover:text-red-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            <span className="sr-only">Shopping Cart</span>
                        </Link>
                        <Link href="/search" className="text-gray-600 hover:text-red-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <span className="sr-only">Search</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
