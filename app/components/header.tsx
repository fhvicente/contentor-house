import React from 'react';
import Navigation from './navigation';

const Header: React.FC = () => {
    return (
        <header>
            <div className='container mx-auto p-8 text-center'>
                <Navigation />
                <hr />
            </div>
        </header>
    );
};

export default Header;