import React from "react";
import { reqUrl, fetchConfig } from "@/app/config";
import SimpleHeader from '@/app/components/simple-header';

// Updated type definition to match NextJS page props requirements
type PageProps = {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

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
                    <p className="text-center py-20">Page not found.</p>
                </>
            );
        }    

        return (
            <>
                <SimpleHeader />
                    <section className="container mx-auto p-8 pb-20 text-center">
                        <div>
                            <h1 className="text-4xl font-bold mb-8">{page.title.rendered}</h1>
                            <div className="mx-auto max-w-3xl text-justify wp-content" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
                        </div>
                    </section>
            </>
        );
    } catch (error) {
        console.error("Error fetching blog post:", error);
        return (
            <>
                <SimpleHeader />
                <p className="text-center py-20">Error loading the post. Please try again later.</p>
            </>
        );
    }
};

export default BlogDetails;