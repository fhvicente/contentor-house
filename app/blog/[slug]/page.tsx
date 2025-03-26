import React from "react";
import { reqUrl } from "@/app/config";

interface BlogParams {
    params: {
        slug: string;
    };
}

const BlogDetails = async ({ params }: BlogParams) => {
    const resolvedParams = await params;
    
    const req = await fetch(`${reqUrl}/posts?_fields=id,slug,title,content&slug=${resolvedParams.slug}`);
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
};

export default BlogDetails;