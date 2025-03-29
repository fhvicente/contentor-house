"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Importação dos estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Dados dos testimonials
const testimonials = [
    {
        id: 1,
        name: "Maria Silva",
        role: "Container Home Owner",
        avatar: "/images/image-1.jpg",
        quote: "My experience with Contentor House was incredible. The project exceeded all my expectations, and the finish is of the highest quality. I recommend it to anyone looking for a sustainable and modern solution."
    },
    {
        id: 2,
        name: "João Mendes",
        role: "Architect",
        avatar: "/images/image-2.jpg",
        quote: "As a professional in the field, I can say that Contentor House's work is among the best in the market. Their projects are innovative, sustainable and aesthetically impressive."
    },
    {
        id: 3,
        name: "Ana Costa",
        role: "Entrepreneur",
        avatar: "/images/image-3.jpg",
        quote: "I chose Contentor House for my commercial space and it was the best decision. I achieved a unique, sustainable environment that attracts customers' attention. The return on investment was excellent."
    },
    {
        id: 4,
        name: "Carlos Oliveira",
        role: "Residential Customer",
        avatar: "/images/image-4.jpg",
        quote: "My family is extremely happy with our container home. The thermal comfort, energy savings and modern design made our experience unique. Contentor House delivered exactly what they promised."
    },
    {
        id: 5,
        name: "Sofia Martins",
        role: "Interior Designer",
        avatar: "/images/image-5.jpg",
        quote: "Collaborating with Contentor House on interior design projects has been an enriching experience. Their commitment to sustainability and innovation is inspiring, and the end result always delights clients."
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-100" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Discover the experiences of those who have already chosen our container housing solutions.
                </p>

                <div className="relative testimonials-slider">
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-14"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} className="h-auto">
                                <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col min-h-[400px]">
                                    <div className="flex items-center mb-6">
                                        <div className="w-14 h-14 relative mr-4 rounded-full overflow-hidden flex-shrink-0">
                                            <Image 
                                                src={testimonial.avatar} 
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                            <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <div className="mb-4 flex-shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 7L8 11H11V17H5V11L7 7H10ZM18 7L16 11H19V17H13V11L15 7H18Z" fill="#CCCCCC"/>
                                        </svg>
                                    </div>
                                    <p className="text-gray-700 italic flex-grow overflow-y-auto line-clamp-6">{testimonial.quote}</p>
                                    <div className="mt-4 flex items-center flex-shrink-0">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx global>{`
                .testimonials-slider .swiper-pagination-bullet {
                    background-color: #888;
                    opacity: 0.5;
                }
                
                .testimonials-slider .swiper-pagination-bullet-active {
                    opacity: 1;
                    background-color: #444;
                }
                
                .testimonials-slider .swiper-button-next,
                .testimonials-slider .swiper-button-prev {
                    color: #444;
                }
                
                .testimonials-slider .swiper-button-next:after,
                .testimonials-slider .swiper-button-prev:after {
                    font-size: 24px;
                }
                
                .testimonials-slider .swiper-slide {
                    height: auto !important;
                }
                
                .testimonials-slider .swiper-wrapper {
                    align-items: stretch;
                }
            `}</style>
        </section>
    );
} 