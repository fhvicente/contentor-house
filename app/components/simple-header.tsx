import React from 'react';
import SimpleNavigation from './simple-navigation';

const SimpleHeader: React.FC = () => {
    return (
        <header className="bg-red-900 py-4">
            <div className="container mx-auto px-8">
                <SimpleNavigation />
            </div>
        </header>
    );
};

export default SimpleHeader; 