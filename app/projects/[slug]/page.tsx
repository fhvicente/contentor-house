import React from "react";
import Image from "next/image";
import { reqUrl } from '@/app/config';

interface ProjectParams {
    params: {
        slug: string;
    };
}

const ProjectDetails = async ({ params }: ProjectParams) => {
    const resolvedParams = await params;
    
    const req = await fetch(`${reqUrl}/projects?&acf_format=standard&_fields=id,slug,title,acf&slug=${resolvedParams.slug}`);
    const projects = await req.json();
    const project = projects[0];

    return (
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
    );
};

export default ProjectDetails;