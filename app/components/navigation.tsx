import React from 'react';
import Link from "next/link";

const Navigation: React.FC = () => {
    return (
        <nav className="flex justify-center gap-8 items-center">
            <Link href="/" className="mr-auto">
                <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#ffffff"></path>
                </svg>
            </Link>
    
            <Link href="/projects" className="font-semibold text-white">Projects</Link>
            <Link href="/blog" className="font-semibold text-white">Blog</Link>
            <Link href="/about" className="font-semibold text-white">About</Link>
            <Link href="/contact" className="font-semibold text-white">Contact</Link>
        </nav>
    );
};

export default Navigation;