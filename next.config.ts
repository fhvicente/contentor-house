import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
            },
            {
                protocol: 'http',
                hostname: 'contentorhouse.pt',
            },
            {
                protocol: 'https',
                hostname: 'api.contentorhouse.pt',
            },
            {
                protocol: 'http',
                hostname: 'api.contentorhouse.pt',
            }
        ],
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 86400,
        // unoptimized: true,
    },
    poweredByHeader: false,
    compress: true,
    // output: 'export',
    generateEtags: false,

};

export default nextConfig;
