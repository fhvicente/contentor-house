'use client';

import React, { useState } from "react"
import Input from '../components/input';
import Textarea from '../components/textarea';
import Button from '../components/button';

// Simple interface for validation errors
interface ValidationError {
    field: string;
    message: string;
}

const Form: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
    const [formMessage, setFormMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormErrors({});
        setFormMessage('');
        setIsSubmitting(true);
        
        try {
            const formData = new FormData(event.target as HTMLFormElement);
            const response = await fetch('http://contentorhouse.pt/wp-json/contact-form-7/v1/contact-forms/f7f6889/feedback', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.status === 'validation_failed' && data.invalid_fields) {
                const errors: {[key: string]: string} = {};
                data.invalid_fields.forEach((field: ValidationError) => {
                    errors[field.field] = field.message;
                });
                setFormErrors(errors);
            } else {
                setFormMessage(data.message || 'Thank you for your message!');
                (event.target as HTMLFormElement).reset();
            }
        } catch (error) {
            console.error('Submission error:', error);
            setFormMessage('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {formMessage && (
                <div className="mb-6 p-4 bg-teal-100 text-teal-700 rounded">
                    {formMessage}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                    <label htmlFor="full_name" className="block mb-2 text-slate-900">Name</label>
                    <Input 
                        type="text" 
                        name="your-name" 
                        id="full_name"
                        required={true}
                    />
                    {formErrors['your-name'] && (
                        <p className="text-red-500 mt-1">{formErrors['your-name']}</p>
                    )}
                </div>
                
                <div>
                    <label htmlFor="email" className="block mb-2 text-slate-900">Email</label>
                    <Input 
                        type="email" 
                        name="your-email" 
                        id="email"
                        required={true}
                    />
                    {formErrors['your-email'] && (
                        <p className="text-red-500 mt-1">{formErrors['your-email']}</p>
                    )}
                </div>
                
                <div>
                    <label htmlFor="subject" className="block mb-2 text-slate-900">Subject</label>
                    <Input 
                        type="text" 
                        name="your-subject" 
                        id="subject"
                        required={true}
                    />
                    {formErrors['your-subject'] && (
                        <p className="text-red-500 mt-1">{formErrors['your-subject']}</p>
                    )}
                </div>
                
                <div>
                    <label htmlFor="message" className="block mb-2 text-slate-900">Message</label>
                    <Textarea 
                        name="your-message" 
                        id="message" 
                        required={true}
                    />
                    {formErrors['your-message'] && (
                        <p className="text-red-500 mt-1">{formErrors['your-message']}</p>
                    )}
                </div>

                <Button 
                    type="submit" 
                    className="w-40" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                </Button>
            </form>
        </>
    );
};

export default Form;