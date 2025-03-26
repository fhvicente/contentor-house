import React from "react";
import { reqUrl, fetchConfig } from "@/app/config";

interface BlogParams {
    params: {
        slug: string;
    };
}

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidar a cada hora

const BlogDetails = async ({ params }: BlogParams) => {
    const resolvedParams = await params;
    
    try {
        const req = await fetch(`${reqUrl}/posts?_fields=id,slug,title,content&slug=${resolvedParams.slug}`, fetchConfig);
        
        if (!req.ok) {
            throw new Error(`Failed to fetch post: ${req.status}`);
        }
        
        const pages = await req.json();
        const page = pages[0];

        if (!page) {
            return <p className="text-center">Página não encontrada.</p>;
        }    

        return (
            <div className="container mx-auto p-8 pb-16">
                <section>
                    <h1 className="text-4xl bold text-center font-bold mb-8">{page.title.rendered}</h1>
                    <div className="prose prose-slate mx-auto max-w-2xl" dangerouslySetInnerHTML={{__html: page.content.rendered}} />
                </section>
            </div>
        );
    } catch (error) {
        console.error("Error fetching blog post:", error);
        return <p className="text-center">Erro ao carregar o post. Tente novamente mais tarde.</p>;
    }
};

export default BlogDetails;