import React from "react";
import { Metadata, Viewport } from "next";
import { Providers } from './providers';
import Footer from "./components/footer";
import './globals.css';

export const metadata: Metadata = {
    title: 'Contentor House',
    description: 'Explore our projects and ideas',
};

export const viewport: Viewport = {
    themeColor: '#ffffff',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

// Desabilita o comportamento dinâmico para o layout
export const dynamic = 'force-static';
export const revalidate = 86400; // 24 horas

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning className="min-h-screen">
                <Providers>
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
};
