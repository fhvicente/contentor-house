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
        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full" data-aos="fade-up">
            <div className="relative aspect-[4/3] w-full">
                <Image 
                    fill
                    src={large_image}
                    alt={`Image for ${title}`}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="p-6 text-center">
                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p className="text-gray-600">{summary}</p>
            </div>
        </div>
    );
};

export default CardShelter;