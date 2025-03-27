import React from 'react';
import Navigation from './navigation';
import HeroSlider from './slider';

const Header: React.FC = () => {
    return (
        <header className="relative">
            <div className="absolute top-0 left-0 right-0 z-10">
                <div className='container mx-auto p-8'>
                    <Navigation />
                </div>
            </div>
            <HeroSlider />
        </header>
    );
};

export default Header;