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
        <div className="">
            <p className="text-2xl m-5 mx-auto">
                {title}
            </p>
            <Link href={`/blog/${slug}`}className="text-lg text-teal-800 font-semibold mb-4">
                <Button className="cursor-pointer">Learn more</Button>
            </Link>
            <div className="m-5">
                <hr />
            </div>
        </div>
    );
};

export default BlogPost;