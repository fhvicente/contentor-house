import React from "react";
import Link from "next/link";

interface BlogPostProps {
    title: string;
    author: string;
    slug: string;
    className?: string; // Optional className
}

const BlogPost: React.FC<BlogPostProps> = ({
    title, 
    author, 
    slug, 
    className = ""
}) => {
    return (
        <div className={className}>
            <Link href={`/blog/${slug}`} 
            className="text-lg text-teal-800 font-semibold mb-4"
            >
                {title}
            </Link>
            <p className="text-md">{author}</p>
        </div>
    );
};

export default BlogPost;