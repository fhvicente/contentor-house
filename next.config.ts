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

    async rewrites() {
        return [
            {
            source: "/api/wp/:path*",
            destination: "https://contentorhouse.dns.dominios.pt/wp-json/wp/v2/:path*",
            },
        ];
    }

};

  

export default nextConfig;
