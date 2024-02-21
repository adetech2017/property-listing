import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
//import './ContactForm.css';  // Import your CSS file for styling

function ContactForm() {
    const [state, handleSubmit] = useForm("xdoqgwjy");

    return (
        <section className="contact">
            <div className="container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your email"
                        className="form-input"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        className="form-textarea"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <button type="submit" disabled={state.submitting} className="form-button">
                        {state.submitting ? 'Submitting...' : 'Submit'}
                    </button>
                    {state.succeeded && (
                        <p className="form-success-message">Thanks for joining!</p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
