import React from "react";
import { reqUrl, fetchConfig } from "@/app/config";
import SimpleHeader from '@/app/components/simple-header';

// Updated type definition to match NextJS page props requirements
type PageProps = {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidar a cada hora

const BlogDetails = async ({ params }: PageProps) => {
    const resolvedParams = await params;
    
    try {
        const req = await fetch(`${reqUrl}/posts?_fields=id,slug,title,content&slug=${resolvedParams.slug}`, fetchConfig);
        
        if (!req.ok) {
            throw new Error(`Failed to fetch post: ${req.status}`);
        }
        
        const pages = await req.json();
        const page = pages[0];

        if (!page) {
            return (
                <>
                    <SimpleHeader />
                    <p className="text-center py-20">Página não encontrada.</p>
                </>
            );
        }    

        return (
            <>
                <SimpleHeader />
                <div className="container mx-auto p-8 pb-16">
                    <section>
                        <h1 className="text-4xl bold text-center font-bold mb-8">{page.title.rendered}</h1>
                        <div className="prose prose-slate mx-auto max-w-2xl" dangerouslySetInnerHTML={{__html: page.content.rendered}} />
                    </section>
                </div>
            </>
        );
    } catch (error) {
        console.error("Error fetching blog post:", error);
        return (
            <>
                <SimpleHeader />
                <p className="text-center py-20">Erro ao carregar o post. Tente novamente mais tarde.</p>
            </>
        );
    }
};

export default BlogDetails;