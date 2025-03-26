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
                hostname: 'contentorhouse.local',
            }
        ]
    }
};

export default nextConfig;
