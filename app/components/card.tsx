import React from 'react';
import Image from "next/image";
import Button from './button';
import Link from "next/link";

// Define the prop types for type safety
interface CardProps {
    title: string;
    subtitle: string;
    thumbnail: string,
    btnLabel: string;
    href: string;
}

const Card: React.FC<CardProps> = ({ 
    title, 
    subtitle, 
    thumbnail,
    btnLabel, 
    href,  
}) => {
    return (
        <div className="text-center">
            <Link href={href}>
                <Image 
                    className="block mx-auto mb-4"
                    width={600}
                    height={400}
                    src={thumbnail}
                    alt={`Thumbnail for ${title}`}
                />
            </Link>
            <div className="font-semibold text-center text-xl mb-1">{title}</div>
            <div className="text-md text-center mb-4">{subtitle}</div>
            <Button href={href}>{btnLabel}</Button>
        </div>
    );
};

export default Card;