import React from 'react';

export default function Features() {
    return (
        <section className='bg-gray-50 py-20' data-aos="fade-up">
            <div className='container mx-auto px-8'>
                <h2 className='text-3xl font-bold text-center mb-12'>Why Choose Container Homes?</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='bg-white p-8 rounded-lg shadow-sm'>
                        <h3 className='text-xl font-bold mb-4'>Eco-Friendly</h3>
                        <p className='text-gray-600'>Our container homes repurpose existing materials, reducing waste and environmental impact.</p>
                    </div>
                    <div className='bg-white p-8 rounded-lg shadow-sm'>
                        <h3 className='text-xl font-bold mb-4'>Cost-Effective</h3>
                        <p className='text-gray-600'>Container homes offer significant cost savings compared to traditional construction methods.</p>
                    </div>
                    <div className='bg-white p-8 rounded-lg shadow-sm'>
                        <h3 className='text-xl font-bold mb-4'>Versatile Design</h3>
                        <p className='text-gray-600'>From minimalist to luxurious, our container homes can be customized to suit any style or need.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
