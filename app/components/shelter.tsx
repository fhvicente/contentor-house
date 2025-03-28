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
            <div className='container mx-auto p-8 pb-16' data-aos="fade-up">
                <section>
                    <h1 className='text-2xl bold text-center font-bold mb-8'>Shelters</h1>
                    <h2 className='text-4xl bold text-center font-bold mb-8'>Green Housing Experts Faro</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-10'>
                        {shelters.map(shelter => (
                            <CardShelter 
                                key={shelter.id}
                                title={shelter.title.rendered}
                                summary={shelter.acf.summary}
                                large_image={shelter.acf.large_image}
                            />
                        ))}
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error("Error fetching shelters:", error);
        return <p className="text-center">Erro ao carregar abrigos. Tente novamente mais tarde.</p>;
    }
};

export default ShelterList;