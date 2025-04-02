import React from "react";
import Link from "next/link";
import Button from "../components/button";

interface BlogPostProps {
    title: string;
    slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
    title, 
    slug
}) => {
    return (
        <div className="py-4 md:py-5">
            <h2 
                className="text-xl md:text-2xl font-medium mb-3 md:mb-4"
                dangerouslySetInnerHTML={{ __html: title }}
            />
            <Link href={`/blog/${slug}`}>
                <Button className="text-sm md:text-base cursor-pointer">Read Article</Button>
            </Link>
            <div className="mt-4 md:mt-5">
                <hr className="border-gray-200" />
            </div>
        </div>
    );
};

export default BlogPost;