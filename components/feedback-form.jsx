'use client';

import { useState } from 'react';
import { Alert } from './alert';
import { Card } from './card';
import { SubmitButton } from './submit-button';

export function FeedbackForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const myForm = event.target;
            const formData = new FormData(myForm);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });
            if (res.status === 200) {
                setStatus('ok');
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <div className="w-full md:max-w-md">
            <Card title="Leave Feedback">
                <form name="feedback" onSubmit={handleFormSubmit} className="flex flex-col gap-3 align-center">
                    <input type="hidden" name="form-name" value="feedback" />
                    <div role="group" aria-labelledby="personal-info">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input 
                            id="name"
                            name="name" 
                            type="text" 
                            placeholder="Name" 
                            required 
                            className="input" 
                            aria-required="true"
                            minLength="2"
                        />
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input 
                            id="email"
                            name="email" 
                            type="email" 
                            placeholder="Email (optional)" 
                            className="input" 
                            aria-required="false"
                        />
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea 
                            id="message"
                            name="message" 
                            placeholder="Message" 
                            required 
                            className="input min-h-[100px]" 
                            aria-required="true"
                            minLength="10"
                        />
                    </div>
                    <SubmitButton text={status === 'pending' ? 'Submitting...' : 'Submit'} />
                    {status === 'ok' && <Alert type="success">Submitted!</Alert>}
                    {status === 'error' && <Alert type="error">{error}</Alert>}
                </form>
            </Card>
        </div>
    );
}
