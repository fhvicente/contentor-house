import React from "react";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
}
  

const Button: React.FC<ButtonProps> = ({
    children, 
    href, 
    type = 'button', 
    className = '',
    disabled = false
}) => {
    const styles = `py-2 px-5 text-white rounded font-semibold bg-red-900 hover:bg-red-950 transition-colors ${className || ''}`;

    if (href) {
        return (
            <Link href={href} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={styles} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;