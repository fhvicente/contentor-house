import React from 'react';
import Card from '../components/card';
import { reqUrl } from '../config';

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

const Projects = async () => {
    const req = await fetch(`${reqUrl}/projects?&acf_format=standard&_fields=id,slug,title,acf`);
    const projects: Project[] = await req.json();

    return (
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
    );
};

export async function generateStaticParams() {
    const req = await fetch(`${reqUrl}/projects?_fields=slug`);
    const projects: { slug: string }[] = await req.json();

    return projects.map((project) => ({
        slug: project.slug
    }));
}

export default Projects