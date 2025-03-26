import React from 'react';

interface InputProps {
    required?: boolean;
    type: string;
    name: string;
    id: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({required, type, name, id, className}) => (
    <input required={required} type={type} name={name} id={id} className={`border rounded border-slate-300 outline-0 py-1 px-3 hover:border-slate-900 focus:border-slate-900 ${className || ''}`} />
);

export default Input;