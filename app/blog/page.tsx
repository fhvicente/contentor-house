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
}

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidar a cada hora

const Blog = async () => {
    const req = await fetch(`${reqUrl}/posts?_fields=id,slug,title&per_page=20`, fetchConfig);
    const BlogPosts: BlogPostData[] = await req.json();

    return (
        <>
            <SimpleHeader />
            <section className="container px-4 py-8 md:py-10 mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">Blog</h1>
                <div className="max-w-2xl mx-auto">
                    {BlogPosts.length > 0 ? (
                        BlogPosts.map(post => (
                            <BlogPost
                                key={post.id}
                                title={post.title.rendered}
                                slug={post.slug}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-600 py-10">No blog posts found. Check back soon!</p>
                    )}
                </div>
            </section>
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
