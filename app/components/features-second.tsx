import React from 'react';
import Image from 'next/image';
import Button from './button';
import { reqUrl, staticFetchConfig } from '../config';

interface MediaItem {
    id: number,
    source_url: string,
    title: {
        rendered: string
    }
}

export default async function FeaturesSecond() {
    const imageId = 22;
    
    let image: MediaItem | null = null;
    
    try {
        const req = await fetch(`${reqUrl}/media/${imageId}`, staticFetchConfig);
        if (req.ok) {
            image = await req.json();
            console.log(image)
        }
    } catch (error) {
        console.error("Erro ao buscar imagem:", error);
    }

    return (
        <section className='bg-gray-800 w-full h-screen relative'>
            <div className='container mx-auto px-4 h-full flex items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-left' data-aos="fade-up">
                    <div>
                        {image ? (
                            <Image 
                                width={900} 
                                height={500} 
                                src={image.source_url}
                                alt={image.title.rendered}
                                className='rounded-2xl'
                            />
                        ) : (
                            <div className="bg-gray-800 w-full h-[300px] flex items-center justify-center">
                                <p className="text-white">Image not found.</p>
                            </div>
                        )}
                    </div>

                    <div className='space-y-6 z-10'>
                        <p className='text-white font-medium text-lg'>Eco Living</p>
                        <h1 className='text-white text-4xl'>Faro&#39;s Eco-Container Choices</h1>
                        <p className='text-white text-lg'>Explore innovative, eco-friendly container housing solutions in Faro, prioritizing sustainability without compromising on quality and comfort.</p>
                        <div className='pt-4'>
                            <Button href="/">Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
