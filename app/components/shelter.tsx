import React from 'react';
import CardShelter from './card-shelter';
import { reqUrl, staticFetchConfig } from '../config';

interface Shelter {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    acf: {
        summary: string;
        large_image: string;
    };
}

export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidar a cada 24 horas

const ShelterList = async () => {
    try {
        const req = await fetch(`${reqUrl}/shelter?acf_format=standard&_fields=id,title,acf.large_image,acf.summary&per_page=100`, staticFetchConfig);
        
        if (!req.ok) {
            throw new Error(`Failed to fetch shelters: ${req.status}`);
        }
        
        const shelters: Shelter[] = await req.json();

        return (
            <section className="py-20 bg-white">
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>Shelters</h2>
                    <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
                        Green Housing Experts in Faro, Portugal
                    </p>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {shelters.map(shelter => (
                            <CardShelter 
                                key={shelter.id}
                                title={shelter.title.rendered}
                                summary={shelter.acf.summary}
                                large_image={shelter.acf.large_image}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error("Error fetching shelters:", error);
        return <p className="text-center">Error loading shelters. Please try again later.</p>;
    }
};

export default ShelterList;