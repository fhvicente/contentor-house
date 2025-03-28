import React from "react";
import Image from "next/image";
import { reqUrl, staticFetchConfig } from '@/app/config';
import SimpleHeader from '@/app/components/simple-header';

// Updated type definition to match NextJS page props requirements
type PageProps = {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidar a cada 24 horas

const ProjectDetails = async ({ params }: PageProps) => {
    const resolvedParams = await params;
    
    try {
        const req = await fetch(`${reqUrl}/projects?acf_format=standard&_fields=id,slug,title,acf.large_image,acf.category,acf.summary&slug=${resolvedParams.slug}`, staticFetchConfig);
        
        if (!req.ok) {
            throw new Error(`Failed to fetch project: ${req.status}`);
        }
        
        const projects = await req.json();
        const project = projects[0];
        
        if (!project) {
            return (
                <>
                    <SimpleHeader />
                    <p className="text-center py-20">Projeto não encontrado.</p>
                </>
            );
        }

        return (
            <>
                <SimpleHeader />
                <div className="container mx-auto p-8 pb-16">
                    <section>
                        <h1 className="text-4xl bold text-center font-bold mb-8">{project.title.rendered}</h1>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <Image
                                    width={960}
                                    height={540}
                                    src={project.acf.large_image} 
                                    alt="Product Image"
                                    priority={true}
                                />
                            </div>
                            <div>
                                <div className="text-md font-semibold mb-1">Category</div>
                                <div className="text-lg mb-8">{project.acf.category.name}</div>
                                <div className="text-md font-semibold mb-1">Summary</div>
                                <div className="text-lg mb-8">{project.acf.summary}</div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    } catch (error) {
        console.error("Error fetching project details:", error);
        return (
            <>
                <SimpleHeader />
                <p className="text-center">Error loading project details. Please try again later.</p>
            </>
        );
    }
};

export default ProjectDetails;