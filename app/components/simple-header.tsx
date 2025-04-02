import React from 'react';
import SimpleNavigation from './simple-navigation';

const SimpleHeader: React.FC = () => {
    return (
        <header className="bg-gray-900 py-3 md:py-4">
            <div className="container mx-auto px-4 md:px-8">
                <SimpleNavigation />
            </div>
        </header>
    );
};

export default SimpleHeader; 