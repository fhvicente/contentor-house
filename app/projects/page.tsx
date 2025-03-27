import React from 'react';
import Card from '../components/card';
import { reqUrl, staticFetchConfig } from '../config';
import SimpleHeader from '../components/simple-header';

interface Project {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    acf: {
        thumbnail: string;
        category: {
            name: string;
        };
    };
}

export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidar a cada 24 horas

const Projects = async () => {
    try {
        const req = await fetch(`${reqUrl}/projects?acf_format=standard&_fields=id,slug,title,acf.thumbnail,acf.category&per_page=100`, staticFetchConfig);
        
        if (!req.ok) {
            throw new Error(`Failed to fetch projects: ${req.status}`);
        }
        
        const projects: Project[] = await req.json();

        return (
            <>
                <SimpleHeader />
                <div className='container mx-auto p-8 pb-16'>
                    <section>
                        <h1 className='text-4xl bold text-center font-bold mb-8' >Projects</h1>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {projects.map(project => (
                                <Card 
                                    key={project.id}
                                    title={project.title.rendered}
                                    thumbnail={project.acf.thumbnail}
                                    subtitle={project.acf.category.name}
                                    btnLabel="Learn More"
                                    href={`/projects/${project.slug}`}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </>
        );
    } catch (error) {
        console.error("Error fetching projects:", error);
        return (
            <>
                <SimpleHeader />
                <p className="text-center">Erro ao carregar projetos. Tente novamente mais tarde.</p>
            </>
        );
    };
};

export async function generateStaticParams() {
    try {
        const req = await fetch(`${reqUrl}/projects?_fields=slug&per_page=100`, staticFetchConfig);
        
        if (!req.ok) {
            return [];
        }
        
        const projects: { slug: string }[] = await req.json();

        return projects.map((project) => ({
            slug: project.slug
        }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}

export default Projects