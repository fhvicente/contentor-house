import React from "react";
import { Metadata } from "next";
import { Providers } from './providers';
import Header from "./components/header";
import Footer from "./components/footer";
import './globals.css';

export const metadata: Metadata = {
    title: 'Contentor House',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Providers>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
};
