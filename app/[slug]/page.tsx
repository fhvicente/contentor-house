import React from "react";
import { reqUrl } from "../config";
import SimpleHeader from "../components/simple-header";

// Updated type definition to match NextJS page props requirements
type PageProps = {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const Page = async ({ params }: PageProps) => {    
    const resolvedParams = await params;
    const req = await fetch(`${reqUrl}/pages?_fields=id,slug,title,content&slug=${resolvedParams.slug}`);
    const pages = await req.json();
    const page = pages[0];

    if (!page) {
        return <p className="text-center">Page not found.</p>;
    }    

    return (
        <>
            <SimpleHeader />
            <section className="container mx-auto p-8 pb-16 text-center">
                <div>
                    <h1 className="text-4xl font-bold mb-8">{page.title.rendered}</h1>
                    <div className="mx-auto max-w-3xl text-justify wp-content" dangerouslySetInnerHTML={{__html: page.content.rendered}} />
                </div>
            </section>
        </>
    );
};

export default Page;