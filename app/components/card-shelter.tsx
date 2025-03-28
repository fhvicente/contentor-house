import React from 'react';
import Image from "next/image";

// Define the prop types for type safety
interface CardProps {
    title: string;
    summary: string;
    large_image: string,
}

const CardShelter: React.FC<CardProps> = ({ title, summary, large_image }) => {
    return (
        <div className="text-center" >
            <Image 
                className="block mx-auto mb-4"
                width={600}
                height={400}
                src={large_image}
                alt={`Large_image for ${title}`}
            />
            <div className="font-semibold text-center text-xl mb-1">{title}</div>
            <div className="text-md text-center mb-4">{summary}</div>
        </div>
    );
};

export default CardShelter;