'use client';

import React, { useState } from "react";
import Input from '../components/input';
import Textarea from '../components/textarea';
import Button from '../components/button';

const Form: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormMessage('');
        setIsSubmitting(true);
        
        try {
            const formData = new FormData(event.target as HTMLFormElement);
            
            formData.append('_wpcf7', '18');
            formData.append('_wpcf7_version', '5.7.7');
            formData.append('_wpcf7_locale', 'en_US');
            formData.append('_wpcf7_unit_tag', `wpcf7-f18-p${Date.now()}`);
            formData.append('_wpcf7_container_post', '0');
            
            const response = await fetch('http://api.contentorhouse.pt/wp-json/contact-form-7/v1/contact-forms/18/feedback', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                },
                mode: 'no-cors'
            });
            
            setFormMessage('Thank you for your message!');
            (event.target as HTMLFormElement).reset();
            
        } catch (error) {
            console.error('Error to send the form:', error);
            setFormMessage('Error: ' + (error instanceof Error ? error.message : String(error)));
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
                </div>
                
                <div>
                    <label htmlFor="email" className="block mb-2 text-slate-900">Email</label>
                    <Input 
                        type="email" 
                        name="your-email" 
                        id="email"
                        required={true}
                    />
                </div>
                
                <div>
                    <label htmlFor="subject" className="block mb-2 text-slate-900">Subject</label>
                    <Input 
                        type="text" 
                        name="your-subject" 
                        id="subject"
                        required={true}
                    />
                </div>
                
                <div>
                    <label htmlFor="message" className="block mb-2 text-slate-900">Message</label>
                    <Textarea 
                        name="your-message" 
                        id="message" 
                        required={true}
                    />
                </div>

                <Button 
                    type="submit" 
                    className="w-40 cursor-pointer" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                </Button>
            </form>
        </>
    );
};

export default Form;