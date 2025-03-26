import React from "react";
import BlogPost from './blog-post';
import { reqUrl } from "../config";

interface BlogPostData {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    author?: string;
}

const Blog = async () => {
    const req = await fetch(`${reqUrl}/posts?_field=id,slug,title`);
    const BlogPosts: BlogPostData[] = await req.json();

    return (
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
    );
};

export default Blog;
