import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <main className='container mx-auto p-8'>
      <section className='text-center'>
        <h1 className='text-5xl font-bold mb-6'>Contentor House</h1>
        <p className='text-xl text-gray-600 mb-8'>
          Welcome to our digital space. Explore our projects and ideas.
        </p>
        
        <div className='flex justify-center gap-4'>
          <Link 
            href="/projects" 
            className='bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors'
          >
            View Projects
          </Link>
          <Link 
            href="/contact" 
            className='border border-teal-600 text-teal-600 px-6 py-3 rounded-md hover:bg-teal-50 transition-colors'
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;