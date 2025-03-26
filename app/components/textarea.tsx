import React from "react";

// Define the prop types for the Textarea
interface TextareaProps {
    name: string;
    id: string;
    required?: boolean;
    className?: string;
    placeholder?: string;
    rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({
    name,
    id,
    required = false,
    className = '',
    placeholder = '',
    rows = 4
}) => {
    return (
        <textarea
            name={name}
            id={id}
            required={required}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${className}`}
            placeholder={placeholder}
            rows={rows}
        />
    );
};
  
export default Textarea;