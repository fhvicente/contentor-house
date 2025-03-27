import React from 'react';
import Link from "next/link";

const SimpleNavigation: React.FC = () => {
    return (
        <nav className="flex justify-center gap-8 items-center">
            <Link href="/" className="font-semibold text-white mr-auto">Contentor House</Link>
            <Link href="/projects" className="font-semibold text-white">Projects</Link>
            <Link href="/blog" className="font-semibold text-white">Blog</Link>
            <Link href="/about" className="font-semibold text-white">About</Link>
            <Link href="/contact" className="font-semibold text-white">Contact</Link>
        </nav>
    );
};

export default SimpleNavigation;