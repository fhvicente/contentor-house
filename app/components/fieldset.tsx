import React from "react";

interface FieldsetProps {
    children: React.ReactNode;
    className?: string; 
}

const Fieldset: React.FC<FieldsetProps> = ({ children, className = '' }) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
};

export default Fieldset;