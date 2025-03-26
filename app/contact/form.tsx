'use client';

import React, { useState } from "react"
import Input from '../components/input';
import Textarea from '../components/textarea';
import Fieldset from '../components/fieldset';
import Button from '../components/button';

const INPUT = 'INPUT';
const TEXTAREA = 'TEXTAREA';

// Define an interface for the field configuration
interface FormField {
    label: string;
    component: typeof INPUT | typeof TEXTAREA;
    type: string;
    name: string;
    id: string;
    validation_error?: boolean;
    validation_message: string;
}

// Interface for the error object
interface ValidationError {
    field: string;
    message: string;
}

const initialFields: FormField[] = [
    {
        label: 'Name',
        component: INPUT,
        type: 'text',
        name: 'your-name',
        id: 'full_name',
        validation_error: false,
        validation_message: '',
    },
    {
        label: 'Email',
        component: INPUT,
        type: 'email',
        name: 'your-email',
        id: 'email',
        validation_error: false,
        validation_message: '',
    },
    {
        label: 'Subject',
        component: INPUT,
        type: 'text',
        name: 'your-subject',
        id: 'subject',
        validation_error: false,
        validation_message: '',
    },
    {
        label: 'Message',
        component: TEXTAREA,
        type: 'text',
        name: 'your-message',
        id: 'message',
        validation_error: false,
        validation_message: '',
    },
];

const Form: React.FC = () => {
    const [fields, setFields] = useState<FormField[]>(initialFields);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Reset validation errors
        setFields(fields.map(field => ({
            ...field,
            validation_error: false,
            validation_message: '',
        })));
        
        setIsSubmitting(true);
        
        try {
            const formData = new FormData(event.target as HTMLFormElement);

            const reqOptions: RequestInit = {
                method: 'POST',
                body: formData
            };

            const req = await fetch('http://contentorhouse.local/wp-json/contact-form-7/v1/contact-forms/17/feedback', reqOptions);
            
            if (!req.ok) {
                throw new Error('Network response was not ok');
            }

            const response = await req.json();

            if (!response) {
                alert('An unexpected error occurred. Try again later.');
                return;
            }

            if (response.invalid_fields && response.invalid_fields.length > 0) {
                setFields(fields.map(field => {
                    const error = response.invalid_fields.find(
                        (x: ValidationError) => x.field === field.name
                    );

                    return {
                        ...field,
                        validation_error: !!error,
                        validation_message: error ? error.message : '',
                    };
                }));
            }

            alert(response.message);
        } catch (error) {
            console.error('Submission error:', error);
            alert('An error occurred while submitting the form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {fields.map(field => (
                <Fieldset key={field.id}>
                    <label htmlFor={field.id} className="text-slate-900">{field.label}</label>
                    {field.component === INPUT && (
                        <Input 
                            type={field.type} 
                            name={field.name} 
                            id={field.id}
                            required={true}
                            className=""
                        />
                    )}
                    {field.component === TEXTAREA && (
                        <Textarea 
                            name={field.name} 
                            id={field.id} 
                        />
                    )}
                    {field.validation_error && (
                        <div className="text-sm text-red-500">
                            {field.validation_message}
                        </div>
                    )}
                </Fieldset>
            ))}

            <Button 
                type="submit" 
                className="w-40" 
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
        </form>
    );
};

export default Form;