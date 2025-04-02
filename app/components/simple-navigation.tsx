'use client';

import React from 'react';
import Link from "next/link";
import { useState } from 'react';

const SimpleNavigation: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative">
            <div className="flex justify-center items-center">
                <Link href="/" className="font-semibold text-white mr-auto">Contentor House</Link>
                
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    <Link href="/projects" className="font-semibold text-white">Projects</Link>
                    <Link href="/blog" className="font-semibold text-white">Blog</Link>
                    <Link href="/about" className="font-semibold text-white">About</Link>
                    <Link href="/contact" className="font-semibold text-white">Contact</Link>
                </div>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>
            
            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden absolute top-full right-0 mt-2 bg-gray-900 rounded-lg shadow-lg p-4 w-48 z-50">
                    <div className="flex flex-col space-y-4">
                        <Link 
                            href="/projects" 
                            className="font-semibold text-white hover:text-gray-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Projects
                        </Link>
                        <Link 
                            href="/blog" 
                            className="font-semibold text-white hover:text-gray-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link 
                            href="/about" 
                            className="font-semibold text-white hover:text-gray-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link 
                            href="/contact" 
                            className="font-semibold text-white hover:text-gray-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default SimpleNavigation;