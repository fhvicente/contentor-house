"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Define content for each slide
const slides = [
    {
        image: "/images/image-1.jpg",
        title: "Green Housing for Modern Needs",
        description: "Elevate your lifestyle with eco-friendly container homes in Faro, designed for sustainability and modern comfort.",
        primaryButton: { text: "Explore Eco Homes", link: "/projects" },
        secondaryButton: { text: "Contact us", link: "/contact" }
    },
    {
        image: "/images/image-2.jpg",
        title: "Sustainable Living Solutions",
        description: "Innovative container homes that combine efficiency, sustainability, and contemporary design.",
        primaryButton: { text: "View Projects", link: "/projects" },
        secondaryButton: { text: "Learn More", link: "/about" }
    },
    {
        image: "/images/image-3.jpg",
        title: "Modern Container Living",
        description: "Experience the perfect blend of modern architecture and eco-conscious living spaces.",
        primaryButton: { text: "Our Services", link: "/services" },
        secondaryButton: { text: "Get in Touch", link: "/contact" }
    },
    {
        image: "/images/image-4.jpg",
        title: "Eco-Friendly Architecture",
        description: "Discover container homes designed with environmental responsibility and elegant aesthetics.",
        primaryButton: { text: "Discover More", link: "/projects" },
        secondaryButton: { text: "Contact us", link: "/contact" }
    },
];

export default function HeroSlider() {
    return (
        <section className="w-full h-screen relative">
            <div className="absolute inset-x-0 bottom-16 z-20 flex justify-center">
                <div className="custom-pagination"></div>
            </div>
            
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ 
                    clickable: true,
                    el: '.custom-pagination'
                }}
                autoplay={{ delay: 4000 }}
                loop
                className="w-full h-full absolute inset-0"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Image 
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                fill
                                sizes="100vw"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/60"></div>
                            
                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-white max-w-4xl px-4">
                                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
                                        {slide.description}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Link 
                                            href={slide.primaryButton.link} 
                                            className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-sm hover:bg-gray-100 transition-colors"
                                        >
                                            {slide.primaryButton.text}
                                        </Link>
                                        <Link 
                                            href={slide.secondaryButton.link} 
                                            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-colors"
                                        >
                                            {slide.secondaryButton.text}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <style jsx global>{`
                .custom-pagination {
                    display: flex;
                    justify-content: center;
                    z-index: 50;
                }
                
                .custom-pagination .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: rgba(255, 255, 255, 0.5);
                    opacity: 1;
                    margin: 0 5px;
                }
                
                .custom-pagination .swiper-pagination-bullet-active {
                    background: white;
                }
            `}</style>
        </section>
    )
};