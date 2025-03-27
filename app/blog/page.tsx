import React from "react";
import BlogPost from './blog-post';
import { reqUrl, fetchConfig } from "../config";
import SimpleHeader from '../components/simple-header';

interface BlogPostData {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    author?: string;
}

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidar a cada hora

const Blog = async () => {
    const req = await fetch(`${reqUrl}/posts?_fields=id,slug,title&per_page=20`, fetchConfig);
    const BlogPosts: BlogPostData[] = await req.json();

    return (
        <>
            <SimpleHeader />
            <div className="container mx-auto p-8">
                <section>
                    <h1 className="text-4xl bold text-center font-bold mb-8">Blog</h1>

                    <div className="max-w-2xl mx-auto">
                        {BlogPosts.map(post => (
                            <BlogPost
                                key={post.id}
                                title={post.title.rendered}
                                slug={post.slug}
                                author="Anonymous"
                                className="mb-4"
                            />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export async function generateStaticParams() {
    const req = await fetch(`${reqUrl}/posts?_fields=slug&per_page=50`, fetchConfig);
    const posts: { slug: string }[] = await req.json();

    return posts.map((post) => ({
        slug: post.slug
    }));
}

export default Blog;
